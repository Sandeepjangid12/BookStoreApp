import React from "react";

function Cards({ item }) {
  return (
    <div className="p-3 flex justify-center">
      
      <div className="
        w-full max-w-xs sm:max-w-sm md:max-w-md
        bg-white dark:bg-slate-900
        text-black dark:text-white
        border border-gray-200 dark:border-gray-700
        rounded-2xl shadow-md
        hover:shadow-xl hover:-translate-y-1 hover:scale-105
        transition-transform duration-200 ease-in-out
        overflow-hidden
      ">

        {/* Image */}
        <div className="h-60 sm:h-64 md:h-72 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between h-48 sm:h-52">
          
          <div>
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2 line-clamp-3">
              {item.title}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center mt-4">
            
            <span className="text-lg font-bold text-green-600">
              ₹{item.price}
            </span>

            <button className="
              px-3 py-1 rounded-full border
              border-gray-300 dark:border-gray-600
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              transition
            ">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cards;