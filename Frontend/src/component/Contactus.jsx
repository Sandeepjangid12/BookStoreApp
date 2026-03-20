import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contactus() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white   px-6 py-12">

        <div className="max-w-6xl pt-20 mx-auto bg-white dark:bg-slate-900 dark:text-white ">

          {/* Heading */}
          <h1 className="text-4xl dark:text-white  font-bold text-center mb-3 text-gray-800">
            Contact Us 
          </h1>

          <p className="text-center dark:text-white text-gray-600 mb-12">
            We'd love to hear from you — whether it's a question, feedback, or just a hello 👋
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* FORM */}
            <form className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl space-y-5 border border-white/40">

              <h2 className="text-2xl font-semibold text-gray-800">
                Send a Message
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition duration-200">
                Send Message 🚀
              </button>

            </form>

            {/* INFO */}
            <div className="space-y-6">

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
                <h3 className="font-semibold text-lg mb-1">📍 Address</h3>
                <p className="text-gray-600">Jodhpur, Rajasthan, India</p>
              </div>

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
                <h3 className="font-semibold text-lg mb-1">📞 Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
                <h3 className="font-semibold text-lg mb-1">📧 Email</h3>
                <p className="text-gray-600">support@bookstore.com</p>
              </div>

              {/* Extra Section */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-2xl text-white shadow-lg">
                <h3 className="font-semibold text-lg mb-2">
                  📚 Bookstore Support
                </h3>
                <p className="text-sm">
                  Our team is available 24/7 to help you with your reading journey.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contactus;