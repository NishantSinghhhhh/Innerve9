import React from "react";
import PrizeLabel from "./PrizeLabel";
import PrizeDetails from "./PrizeDetails";
import CardBackground from "./CardBackground";
import Eggs from "./Eggs";

import { div } from "three/webgpu";

const CardWrapper = ({ prize, prizeLabel, description, amount, images }) => {
  return (
    <>
      <div className="">
        <div className="relative">
          {/* Prize Label */}
          <PrizeLabel text={prizeLabel}/>
          <div
            className={`relative w-[300px] h-[400px] ${
              prize === "First Prize"
                ? "bg-[#E14863]"
                : prize === "Third Prize"
                ? "bg-[#F7B748]"
                : "bg-[#5b5b5b]"
            } rounded-lg overflow-hidden shadow-[-8.542px_8.542px_0px_0px_rgba(0,0,0,0.15)] gap`}
          >
            {/* Prize Title */}
            <p className="absolute top-8 text-white text-center font-angrybirds text-[22px] font-normal z-[3] pl-4">
              {prize}
            </p>

            {/* Prize Details */}
            <PrizeDetails amount={amount} description={description} />

            {/* Background and Decorations */}
            <CardBackground images={images} />

            {/* Eggs */}
          </div>

          <Eggs images={images} />
        </div>
      </div>
    </>
  );
};

export default CardWrapper;
