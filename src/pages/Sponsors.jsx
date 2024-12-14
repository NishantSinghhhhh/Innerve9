import React, { memo } from 'react'
import Accops from "../assets/Accops.svg";
import Devfolio from "../assets/devfolio.svg";
import solana from "../assets/solana.svg";
import microsoft from "../assets/Microsoft.svg";
import kaagaz from "../assets/kaagaz.svg";
import quine from "../assets/quine.svg";
import mro from "../assets/mro.svg";
import tailcall from "../assets/taicall.svg";
import replit from "../assets/replit.svg";
import echo from "../assets/echo.svg";
import xyz from "../assets/xyz.svg";
import verbwire from "../assets/verbwire.svg";
import icici from "../assets/icici.svg";
import buddhani from "../assets/budhani.png";
import GDSCOSS from "../assets/GDSCAIT.png";
import UpperLeaves from "../assets/Orange_Leaves_1.png";
import LowerLeaves from "../assets/Orange_Leaves_bottom.png";
import Texture from "../assets/texture.svg";


import SponsorTab from '../components/SponsorTab';

const MemoizedSponsorTab = memo(SponsorTab);

const Sponsors = () => {
  const titleSponsorImages = [Accops, mro];
  const platinumSponsorImages = [tailcall, microsoft];
  const platformSponsorImages = [solana, Devfolio];
  const coSponsorImages = [kaagaz, replit, quine];
  const subSponsorImages = [verbwire, xyz, echo];
  const goodwillPartnerImages = [icici];
  const communityPartner = [GDSCOSS];
  const foodPartner = [buddhani];

  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      {/* Upper leaves */}
      <div className="w-[120vw] -mb-10 md:-mb-64">
        <img
          src={UpperLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy" // Lazy load for image
        />
      </div>

      {/* Sponsor */}
      <div className="flex flex-col justify-center items-center relative py-24 bg-[#FE7702] w-full">
        <div className="absolute w-full h-full top-0 left-0"
             style={{
               backgroundImage: `url(${Texture})`,
               backgroundPosition: "top",
               backgroundRepeat: "repeat",
               backgroundSize: "100%",
               mixBlendMode: "soft-light",
               opacity: 0.8
             }}>
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-0">
          <p className="capitalize text-[32px] md:text-7xl font-angrybirds text-[#FFFF5C] leading-none">Our Past</p>
          <p className="capitalize text-[80px] md:text-[128px] font-angrybirds text-[#FFFF5C] leading-none">Sponsors</p>
        </div>

        {/* Sponsors Tab */}
        <div className="px-6 mt-24">
          <MemoizedSponsorTab heading="Title Sponsor" images={titleSponsorImages} piggyNumber={0}/>
          <MemoizedSponsorTab heading="Platinum Sponsor" images={platinumSponsorImages} piggyNumber={0}/>
          <MemoizedSponsorTab heading="Platform Sponsors" images={platformSponsorImages} piggyNumber={1}/>
          <MemoizedSponsorTab heading="Co Sponsors" images={coSponsorImages} piggyNumber={2}/>
          <MemoizedSponsorTab heading="Sub Sponsor" images={subSponsorImages} piggyNumber={0}/>
          <MemoizedSponsorTab heading="GoodWill Partner" images={goodwillPartnerImages} piggyNumber={1}/>
        </div>
      </div>

      {/* Lower leaves */}
      <div className="w-[120vw] -mt-10 md:-mt-64">

        <img
          src={LowerLeaves}
          alt="leaves"
          className="w-full object-cover"
          loading="lazy" 
        />
      </div>
    </section>
  );
}

export default Sponsors;
