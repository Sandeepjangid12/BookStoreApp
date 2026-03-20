import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF, FaGithub, FaXTwitter } from "react-icons/fa6";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // ✅ modal close after submit
    document.getElementById("my_modal_3").close();
  };

  return (
    <dialog id="my_modal_3" className="modal">

      {/* Modal Box */}
      <div
        className="modal-box relative 
        bg-gradient-to-r from-[#2c1810] via-[#3e2723] to-[#1b1b1b]
        border border-white/20 
        text-white rounded-3xl shadow-2xl"
      >

        {/* ❌ Close Button */}
        <form method="dialog">
          <button className="cursor-pointer absolute right-3 top-3 text-white text-xl">
            ✕
          </button>
        </form>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        <p className="text-center text-sm text-white/70 mb-6">
          {isLogin ? "Login to continue" : "Join us and start your journey"}
        </p>

        {/* ✅ FORM START */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          {!isLogin && (
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl 
                bg-white/20 placeholder-white/70
                border border-white/30"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          {/* Email */}
          <div>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl 
              bg-white/20 placeholder-white/70
              border border-white/30"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl 
              bg-white/20 placeholder-white/70
              border border-white/30"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl cursor-pointer
            bg-gradient-to-r from-pink-500 to-purple-500 
            hover:scale-105 transition duration-200 font-semibold"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-white/30"></div>
          <span className="px-3 text-sm text-white/70">OR</span>
          <div className="flex-1 h-[1px] bg-white/30"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">

          <button className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
            <FaGoogle className="text-red-400" />
            Google
          </button>

          <button className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
            <FaFacebookF className="text-blue-500" />
            Facebook
          </button>

          <button className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
            <FaGithub className="text-white" />
            GitHub
          </button>

          <button className="cursor-pointer flex items-center justify-center gap-2 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
            <FaXTwitter className="text-white" />
            X
          </button>

        </div>

        {/* Toggle */}
        <p className="text-sm text-center mt-6 text-white/80">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-400 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </dialog>
  );
}

export default Login;