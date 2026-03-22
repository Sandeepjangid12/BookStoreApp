import React, { useEffect, useState } from "react"; 
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");

        const data = res.data.filter(
          (item) => item.category === "free"
        );

        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };

    getbook();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl pb-2">
          Free Offered Courses
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          Explore our free learning resources 📚
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel w-full">

        {/* Slide 1 */}
        <div id="item1" className="carousel-item w-full justify-center">
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-4 sm:gap-5 p-2 sm:p-4
          ">
            {book.slice(0, 4).map((item) => (
              <Cards key={item._id} item={item} />  
            ))}
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item w-full justify-center">
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-4 sm:gap-5 p-2 sm:p-4
          ">
            {book.slice(4, 8).map((item) => (
              <Cards key={item._id} item={item} />  
            ))}
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-2 py-4">
        <a href="#item1" className="btn btn-xs sm:btn-sm">1</a>
        <a href="#item2" className="btn btn-xs sm:btn-sm">2</a>
      </div>

    </div>
  );
};

export default Freebook;