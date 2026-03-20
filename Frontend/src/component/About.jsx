import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-slate-900 dark:text-white min-h-screen  px-6 py-12">

        <div className="max-w-6xl pt-20 mx-auto bg-white dark:bg-slate-900 dark:text-white">

          {/* Heading */}
          <h1 className="text-4xl font-bold dark:text-white text-center mb-4 text-gray-800">
            About Our Bookstore 📚
          </h1>

          <p className="text-center text-gray-600 dark:text-white max-w-2xl mx-auto mb-14">
            Discover a world of stories, ideas, and knowledge. We bring books
            closer to you with love, care, and passion.
          </p>

          {/* Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="books"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Text */}
            <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/40">

              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                📖 Our Mission
              </h2>
              <p className="text-gray-700 mb-6">
                Our mission is to build a cozy and inspiring place for readers.
                From timeless classics to modern bestsellers, we provide books
                that educate, inspire, and entertain.
              </p>

              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                ⭐ Why Choose Us?
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Huge collection of books</li>
                <li>Affordable & best prices</li>
                <li>Fast & reliable delivery</li>
                <li>Trusted by thousands of readers</li>
              </ul>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">

            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-pink-500">10K+</h3>
              <p className="text-gray-600">Books</p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-pink-500">5K+</h3>
              <p className="text-gray-600">Customers</p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-pink-500">4.8⭐</h3>
              <p className="text-gray-600">Rating</p>
            </div>

            <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow border border-white/40 hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-pink-500">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>

          </div>

          {/* Extra Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">
              📚 Our Vision
            </h2>
            <p className="text-sm max-w-xl mx-auto">
              We believe books can change lives. Our goal is to make reading
              accessible, enjoyable, and inspiring for everyone.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;