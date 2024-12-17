import "../index.css";
import React from "react";

const Floating = ({ imgSrc }) => {
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

const RenderFloating = ({ imgSrc }) => {
  return (
    <div>
      {Array.from({ length: 100 }, (_, index) => (
        <Floating key={index} imgSrc={imgSrc} />
      ))}
    </div>
  );
};

export default RenderFloating;
