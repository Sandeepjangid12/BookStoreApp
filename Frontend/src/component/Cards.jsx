import React from "react";

function Cards({ item }) {
  return (
    <div className="p-2 sm:p-3 flex justify-center">
      
      <div className="
        w-full 
        max-w-[260px] 
        sm:max-w-sm 
        md:max-w-md 
        lg:max-w-xs 
        xl:max-w-sm

        bg-white dark:bg-slate-900
        text-black dark:text-white
        
        border border-gray-200 dark:border-gray-700
        rounded-2xl shadow-md
        
        hover:shadow-xl hover:-translate-y-1 hover:scale-105
        transition-all duration-300 ease-in-out
        
        overflow-hidden
      ">

        {/* Image */}
        <div className="h-40 sm:h-52 md:h-56 lg:h-44 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[180px] sm:min-h-[200px]">
          
          <div>
            {/* Title */}
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">
              {item.title}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex justify-between items-center mt-3 sm:mt-4">
            
            <span className="text-base sm:text-lg font-bold text-green-600">
              ₹{item.price}
            </span>

            <button className="
              text-xs sm:text-sm
              px-3 py-1.5 rounded-full border
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