import React from "react";

import Piggy from "../assets/piggy.svg";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className="font-angrybirds text-[80px] md:text-[172px] line leading-[100%]">
        INNERVE 9
      </p>
      <p className="font-angrybirds md:text-[32px]">
        INDIA&apos;S LARGEST STUDENT DRIVEN HACKATHON
      </p>
      <img
        src={Piggy}
        alt="piggy"
        className="hidden md:flex absolute md:top-[8.5%] md:left-[69.3%]"
      />
    </div>
  );
};

export default Heading;
