import React from 'react';
import Warning from "../assets/warning-graphic.svg";
import btn from "../assets/btn.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ButtonSponsor = ({ text }) => {
    useGSAP(() => {
        gsap.to("#warning", {
          y: -20,
          repeat: -1,
          yoyo: true,
          duration: 0.3, // Fast animation duration
          ease: "power1.inOut" // Smooth easing for the motion
        });
      }, []);
      
      
  return (
    <div
      className="md:w-[23.8rem] md:h-[4.7rem] relative"
      style={{
        backgroundImage: `url(${btn})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="font-angrybirds h-[100%] w-[100%] md:text-[36px] flex items-center justify-center relative">
        <p>{text}</p>
        <img
          src={Warning}
          id="warning"
          className="absolute top-[-10%] right-[-10%] md:top-[-20%] md:left-[5%] h-[24px] md:h-[48px]"
          alt="warning"
        />
      </div>
    </div>
  );
};

export default ButtonSponsor;
