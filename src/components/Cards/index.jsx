import React from "react";
import CardWrapper from "./CardWrapper";
import radialfirst from "../../assets/radialtrianglefirst.svg";
import radialsecond from "../../assets/radialtrianglesecond.svg"; 
import radialthird from "../../assets/radialtrianglethird.svg";  
import leftside from "../../assets/leftsidecut.svg";
import rightside from "../../assets/rightsidecut.svg";
import egg1 from "../../assets/Egg1-basket.svg"
import egg2 from "../../assets/Egg2-basket.svg"
import egg3 from "../../assets/Egg3-basket.svg"
import BackgroundPrize from "../../assets/./BackgroundPrize.svg";
import Cloud from "../../assets/./Cloudsbackground.svg";
import { div } from "three/webgpu";
const Cards = () => {
  const cardProps = {
    cardProps: {
      secondPrize: {
        prize: "Second Prize",
        prizeLabel: "SECOND",
        amount: "50K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: {radial:radialsecond  , leftside, rightside,egg:egg3 },
      },
      firstPrize: {
        prize: "First Prize",
        prizeLabel: "FIRST",
        amount: "100K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial:radialfirst, leftside, rightside, egg:egg3 },
      },
      thirdPrize: {
        prize: "Third Prize",
        prizeLabel: "THIRD",
        amount: "25K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialthird, leftside, rightside,egg:egg3 },
      },
    },
  };

  return (

    <div className="relative top-[0%] z-[-2] w-screen transform">

        <p className="absolute text-[60px] top-[30%] font-angrybirds z-[5] text-white left-[50%] transform -translate-x-1/2">PRIZE POOL OF Rs. 10,00,000+</p>
    <div className="absolute flex justify-center items-center top-[30%] w-[100%] h-screen  gap-10 z-[5] ">
             
      <CardWrapper {...cardProps.cardProps.secondPrize} />
      <CardWrapper {...cardProps.cardProps.firstPrize} />
      <CardWrapper {...cardProps.cardProps.thirdPrize} />
    </div>
    <img src={Cloud} alt="Cloud Background" className="relative z-[-4]"/>
    <img src={BackgroundPrize} alt="Background" className="absolute top-[12%] z-[4]" />

    </div>
  );
};

export default Cards;
