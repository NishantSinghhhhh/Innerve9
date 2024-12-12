import React from 'react';
import Roth from "../assets/Roth_ring.svg";

const RotatingRoth = () => {
  return (
    <div className="flex justify-center items-center relative xl:-ml-[10rem] xl:-mb-[20rem] z-1">
      <img
        src={Roth}
        alt=""
        className=" h-[10rem] md:w-[20rem] md:h-[20rem] xl:w-[50rem] xl:h-[50rem] overflow-hidden "
      />
    </div>
  );
};

export default RotatingRoth;
