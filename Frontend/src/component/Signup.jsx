import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white dark:bg-slate-800 text-black dark:text-white">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          Join us and start your journey
        </p>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Button */}
          <button className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-md">
            Sign Up
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600"></div>
        </div>

        {/* Social Login */}
        <button className="w-full py-2 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition">
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
     <span
  onClick={() => document.getElementById("my_modal_3").showModal()}
  className="text-pink-500 font-semibold cursor-pointer"
>
  Login
</span>

        </p>
        <Login/>

      </div>
    </div>
  );
}

export default Signup;