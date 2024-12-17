import React, { memo } from "react";

// Import SVGs directly
import Accops from "../assets/Accops.svg?react";
import Devfolio from "../assets/devfolio.svg?react";
import Solana from "../assets/solana.svg?react";
import Microsoft from "../assets/Microsoft.svg?react";
import Tailcall from "../assets/taicall.svg?react";
import MRO from "../assets/mro.svg?react";
import Replit from "../assets/replit.svg?react";
import Echo from "../assets/echo.svg?react";
import XYZ from "../assets/xyz.svg?react";
import Verbwire from "../assets/verbwire.svg?react";
import ICICI from "../assets/icici.svg?react";
import Texture from "../assets/texture.svg?react";
import UpperLeaves from "../assets/Orange_Leaves_1.png";
import LowerLeaves from "../assets/Orange_Leaves_bottom.png";
// import buddhani from "../assets/budhani.svg?react";
// import GDSCOSS from "../assets/GDSCAIT.svg?react";
// Components
import SponsorTab from "../components/SponsorTab";

const MemoizedSponsorTab = memo(SponsorTab);

const Sponsors = () => {
  const titleSponsorImages = [<Accops />, <MRO />];
  const platinumSponsorImages = [<Tailcall />, <Microsoft />];
  const platformSponsorImages = [<Solana />, <Devfolio />];
  const coSponsorImages = [<Replit />, <Echo />];
  const subSponsorImages = [<Verbwire />];
  const goodwillPartnerImages = [<ICICI />];
  // const commuinityPartnerImages = [<GDSCOSS />];
  // const FoodPartner = [<buddhani />];

  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      {/* Upper Leaves */}
      <div className="w-[120vw] -mb-10 md:-mb-64">
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
            Our Past
          </p>
          <p className="capitalize text-[80px] md:text-[128px] font-angrybirds text-[#FFFF5C] leading-none">
            Sponsors
          </p>
        </div>

        {/* Sponsors Tab */}
        <div className="px-6 mt-24">
          <MemoizedSponsorTab
            heading="Title Sponsor"
            images={titleSponsorImages}
            piggyNumber={0}
          />
          <MemoizedSponsorTab
            heading="Platinum Sponsor"
            images={platinumSponsorImages}
            piggyNumber={0}
          />
          <MemoizedSponsorTab
            heading="Platform Sponsors"
            images={platformSponsorImages}
            piggyNumber={1}
          />
          <MemoizedSponsorTab
            heading="Co Sponsors"
            images={coSponsorImages}
            piggyNumber={2}
          />
          <MemoizedSponsorTab
            heading="Sub Sponsor"
            images={subSponsorImages}
            piggyNumber={0}
          />
          <MemoizedSponsorTab
            heading="GoodWill Partner"
            images={goodwillPartnerImages}
            piggyNumber={1}
          />
        </div>
      </div>

      {/* Lower Leaves */}
      <div className="w-[120vw] -mt-2 md:-mt-64">
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
