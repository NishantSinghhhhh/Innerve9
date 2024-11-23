import BubblePiggy from "../assets/bubble-piggy.svg";
import "../index.css"
import React from "react";

const Floating = () => {
    return (
      <div className="-z-10 absolute left-[0%] bottom-[-18%] w-screen">
        <img
          id="floating-piggy"
          // ref={bubbleRef}
          src={BubblePiggy}
          alt="Bubble Piggy"
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
  