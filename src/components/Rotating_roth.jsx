import React from 'react';
import Roth from "../assets/Roth_ring.svg";

const RotatingRoth = () => {
  return (
    <div className="flex justify-center items-center relative 
      xl:-ml-[10rem] xl:-mb-[20rem] 
      lg:ml-[-13rem] lg:mb-[-15rem]
      md:ml-[-10rem] md:mb-[-10rem]
      z-1">
      <img
        src={Roth}
        alt=""
        className="h-[20rem] w-[20rem]
          md:w-[30rem] md:h-[30rem] 
          lg:w-[45rem] lg:h-[45rem]
          xl:w-[50rem] xl:h-[50rem] 
          "
      />
    </div>
  );
};

export default RotatingRoth;