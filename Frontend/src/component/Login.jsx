import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider";



function Login({ setOpenModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {

    const userInfo = {

      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/user/login",
        data
      );

      console.log("RESPONSE 👉", res.data);

   if (res.data.user) {
  const { password, ...safeUser } = res.data.user;

  localStorage.setItem("Users", JSON.stringify(safeUser));

  setAuthUser(safeUser); // 🔥 THIS FIX

  console.log("LOGGED USER 👉", safeUser);
}
      setTimeout(() => {
        
        toast.success('Loggedin Successfully ');
        
      }, []);


      // optional redirect
      navigate("/");

    } catch (err) {
      console.log("ERROR 👉", err.response?.data);
      setTimeout(() => {
        
        toast.error("Error: " + err.response?.data?.message);
      }, []);

    }
    setOpenModal(false)

  };

  const handleSignup = () => {
    setOpenModal(false);
    navigate("/signup");
  };

  return (
    <div className="fixed  inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-slate-900 dark:text-white p-6 rounded-xl w-96 relative">

        {/* Close */}
        <button
          onClick={() => setOpenModal(false)}
          className="absolute right-2 top-2"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter valid email",
                },
              })}
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={handleSignup}
            className="text-pink-500 cursor-pointer font-semibold"
          >
            Signup
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;