import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 bg-white dark:bg-slate-900 dark:text-white text-base-content mt-10">

      {/* TOP SECTION */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">BookStore</h2>
          <p className="mt-3 text-sm">
            Discover thousands of books, courses, and resources to boost your knowledge.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">Courses</a></li>
            <li><a className="link link-hover">About</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="link link-hover">Programming</a></li>
            <li><a className="link link-hover">Business</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Self Growth</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Subscribe</h3>
          <p className="text-sm mb-3">Get latest updates & offers</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered w-full text-sm  dark:text-black "
            />
            <button className="bg-black text-white rounded-md py-1 px-4 hover:bg-gray-500 duration-300 cursor-pointer">Join</button>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-300 py-4 text-center text-sm">
        © {new Date().getFullYear()} BookStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;