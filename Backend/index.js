import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"; // ✅ only once
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch(err => console.log(err));

// routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});