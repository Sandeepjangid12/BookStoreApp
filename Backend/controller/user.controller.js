import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    console.log("email check:", email); // 🔍 debug

    // ✅ IMPORTANT: await use karo
    const user = await User.findOne({ email });

    console.log("User found:", user); // 🔍 debug

    if (user) {
      return res.status(400).json({
        message: "User already exists!",
      });
    }

    // hash password for secure password
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

res.status(201).json({
  message: "User Created Successfully!",
  user: createdUser,
});

  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//for login  is me hum user ko database se validate krvayege  ki user pele se exists h ya nhi
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};