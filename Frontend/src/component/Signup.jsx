import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

   const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
   try {
    const res = await axios.post(
      "http://localhost:3000/user/signup",
      data
    );

    console.log("RESPONSE 👉", res.data);

    if (res.data.user) {
      // 🔐 password remove
      const { password, ...safeUser } = res.data.user;

      // ✅ save in localStorage
      localStorage.setItem("Users", JSON.stringify(safeUser));

      console.log("LOCAL STORAGE USER 👉", safeUser);
    }
toast.success('Signup Successfully ✅');


    // optional redirect
    navigate("/");

  } catch (err) {
    console.log("ERROR 👉", err.response?.data);
    toast.error("Error: " + err.response?.data?.message);
  }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white  flex items-center justify-center px-4">

      <div className="w-full  dark:bg-slate-900 dark:text-white   max-w-md  p-8 rounded-3xl shadow-2xl bg-white">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-sm text-gray-500 mb-6">
          Join us and start your journey
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Fullname */}
          <div>
            <input
              {...register("fullname", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl border"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">
                {errors.fullname.message}
              </p>
            )}
          </div>

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
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border"
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
                  message: "Minimum 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border"
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
            className="w-full py-3 rounded-xl bg-pink-500 text-white"
          >
            Sign Up
          </button>

        </form>

        {/* Login redirect */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-pink-500 cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;