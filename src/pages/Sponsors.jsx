import React from 'react';
import Upper_Leaves from "../assets/Orange_Leaves.png";
import Upper_Leaves_1 from "../assets/Orange_Leaves_1.png";
import Lower_Leaves from "../assets/Orange_Leaves_bottom.png";
import Sponsor_bottom from "../assets/Sponsor_bottom.png";
import Background from "../assets/Sponsors_Bg.svg";
import BgTexture from "../assets/Sponsors_Texture.svg";
import SponsorTab from '../components/SponsorTab';
import Accops from "../assets/Accops.svg";
import Devfolio from "../assets/devfolio.svg"
import EthIndia from "../assets/ETHIndia.png"
import Polygom from "../assets/Polygon.png"
// import Sponsor1 from "../assets/Sponsor1.svg";
// import Sponsor2 from "../assets/Sponsor2.svg";
import "./sponsors.css"

const Sponsors = () => {
  const titleSponsorImages = [Polygom, Devfolio, EthIndia];
  const goldSponsorImages = [Accops, Accops, Accops];
  const silverSponsorImages = [Accops, Accops, Accops]; // Add more images as needed.

  return (
    <div className="w-[100%] h-auto">

      <div className="-mb-72" style={{backgroundImage: `url(${Upper_Leaves_1})`, backgroundPosition:"center"}}
      >
        <img src ={Upper_Leaves_1}  className=""/>
      </div>

      <div className= "media" >
        {/* Background layers */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: ` url(${Background})`,
            opacity: 0.7,
            mixBlendMode: "soft-light"
          }}
        />
        <div
          className="absolute inset-0 bg-center"
          style={{
            backgroundImage: `url(${BgTexture})`,
            opacity: 0.5,
            mixBlendMode: "soft-light"
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
            <SponsorTab heading="Title Sponsor" images={silverSponsorImages}  piggyNumber={0}/>
            <SponsorTab heading="Gold Sponsors" images={goldSponsorImages} piggyNumber={1}/>
            <SponsorTab heading="Silver Sponsors" images={silverSponsorImages} piggyNumber={2}/>
          </div>
        </div>
      </div>

      <div className="-mt-64" style={{ backgroundImage: `url(${Sponsor_bottom})`, backgroundPosition:"center"}}
      >
        <img src ={Sponsor_bottom}  className=""/>
      </div>
          
      <div />
    </div>
  );
};

export default Sponsors;

// removed conflicts