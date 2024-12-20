import React, { memo } from "react";
import NordVpn from "../assets/NordVpn.svg?react"
// import Wolfram from "../assets/wolfram-sm.png"
// import Wolfram1 from "../assets/Wolfram_Research-Logo.wine.svg?react"
import Texture from "../assets/texture.svg?react";
import UpperLeaves from "../assets/Orange_Leaves_1.png";
import LowerLeaves from "../assets/Orange_Leaves_bottom.png";
import Wolfram from "../assets/logo/Wolfram";
import SponsorTab from "../components/SponsorTab";

const MemoizedSponsorTab = memo(SponsorTab);

const Sponsors = () => {
  const titleSponsorImages = [<NordVpn />, <Wolfram/>];

  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      {/* Upper Leaves */}
      <div className="w-[120vw] -mb-10 md:-mb-32 xl:-mb-48">
        <img
          src={UpperLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      

      {/* Sponsor Section */}
      <div className="flex flex-col justify-center items-center relative py-24 bg-[#FE7702] w-full">
        {/* Texture Background */}
        <div className="absolute w-full h-full top-0 left-0 opacity-80 mix-blend-soft-light">
          
        <Texture className="w-full h-full object-cover" />
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-0">
          <p className="capitalize text-[32px] md:text-7xl font-angrybirds text-[#FFFF5C] leading-none">
            Our 
          </p>
          <p className="capitalize text-[80px] md:text-[128px] font-angrybirds text-[#FFFF5C] leading-none">
            Sponsors
          </p>
        </div>

        {/* Sponsors Tab */}
        <div className="px-6 mt-24">
          <MemoizedSponsorTab
            // heading="Title Sponsor"
            images={titleSponsorImages}
            piggyNumber={1}
          />
        </div>
      </div>

      {/* Lower Leaves */}
      <div className="w-[120vw] -mt-2 md:-mt-32 xl:-mt-48">
        <img
          src={LowerLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Sponsors;
