import React from "react";
import list from "../data/list.json";
import Cards from "./Cards"; // 👈 import

const Freebook = () => {

  const freeBooks = list.filter((item) => item.category === "free");

  return (
    <>

      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>


      <div className="carousel w-full">

        {/* Slide 1 */}
        <div id="item1" className="carousel-item w-full justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {freeBooks.slice(0, 4).map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Slide 2 */}
        <div id="item2" className="carousel-item w-full justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {freeBooks.slice(4, 8).map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-2 py-4">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
      </div>



        </div>

    

    </>
  );
};

export default Freebook;