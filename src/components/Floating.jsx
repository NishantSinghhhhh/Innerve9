import BubblePiggy from "../assets/bubble-piggy.svg";
import "../index.css"
import React from "react";

const Floating = () => {
    return (
      <div className="-z-10 absolute left-[0%] bottom-[-28%] w-screen">
        <img
          id="floating-piggy"
          // ref={bubbleRef}
          src={BubblePiggy}
          alt="Bubble Piggy"
          className="w-[80px] md:w-[270px]"
        />
      </div>
    );
  };
  
  const RenderFloating = () => {
    return (
      <div>
        {Array.from({ length: 100 }, (_, index) => (
          <Floating key={index} />
        ))}
      </div>
    );
  };
  
  export default RenderFloating;
  