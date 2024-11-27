import React from 'react';
import Leaves from "../assets/Orange_Leaves.svg";
import Background from "../assets/Sponsors_Bg.svg";
import BgTexture from "../assets/Sponsors_Texture.svg";
import SponsorTab from '../components/SponsorTab';
import Accops from "../assets/Accops.svg";
// import Sponsor1 from "../assets/Sponsor1.svg";
// import Sponsor2 from "../assets/Sponsor2.svg";

const Sponsors = () => {
  const titleSponsorImages = [Accops, Accops, Accops];
  const goldSponsorImages = [Accops, Accops, Accops];
  const silverSponsorImages = [Accops, Accops, Accops]; // Add more images as needed.

  return (
    <div className="w-[100%]">
      <div className="w-auto">
        {/* Optional leaves image */}
        {/* <img src={Leaves} className="" style={{ fill: 'rgba(254,94,3,255)' }} /> */}
      </div>

      <div className="w-[100%] h-[400vh] bg-[#ff7603] relative">
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(254, 69, 0, 0.7), rgba(254, 69, 0, 0.7)), url(${Background})`,
            opacity: 0.7,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BgTexture})`,
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 p-[5rem] pt-[10rem]">
          {/* Main heading */}
          <div className="flex flex-row justify-center pb-[5rem]">
            <p className="font-angrybirds text-[72px] text-[#FFFF5C]">OUR</p>
            <p className="font-angrybirds text-[128px] text-[#FFFF5C]">SPONSORS</p>
          </div>

          {/* SponsorTabs */}
          <div className="space-y-12">
            <SponsorTab heading="Title Sponsor" images={titleSponsorImages}  piggyNumber={0}/>
            <SponsorTab heading="Gold Sponsors" images={goldSponsorImages} piggyNumber={1}/>
            <SponsorTab heading="Silver Sponsors" images={silverSponsorImages}  piggyNumber={2}/>
            <SponsorTab heading="Title Sponsor" images={titleSponsorImages}  piggyNumber={0}/>
            <SponsorTab heading="Gold Sponsors" images={goldSponsorImages} piggyNumber={1}/>
            <SponsorTab heading="Silver Sponsors" images={silverSponsorImages} piggyNumber={2}/>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
};

export default Sponsors;
