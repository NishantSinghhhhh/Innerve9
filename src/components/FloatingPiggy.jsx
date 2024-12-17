import "../index.css";
import React from "react";


const Floatingpiggy = ({ imgSrc }) => {
    return (
      <div className="-z-10 absolute left-[0%] bottom-[-26%] w-screen">
        <img
          id="floating-piggy"
          src={imgSrc}
          alt="Bubble Piggy"
          className="w-[80px] md:w-[270px]"
        />
      </div>
    );
  };
  
  const RenderPiggy = ({ imgSrc }) => {
    return (
      <div>
        {Array.from({ length: 100 }, (_, index) => (
          <Floatingpiggy key={index} imgSrc={imgSrc} />
        ))}
      </div>
    );
  };
  
  export default RenderPiggy;
  