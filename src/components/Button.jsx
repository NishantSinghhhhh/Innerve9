import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import btn from "../assets/btn.svg";
import Warning from "../assets/warning-graphic.svg";

const Button = ({ BtnIcon, Label }) => {
  useGSAP(() => {
    gsap.to("#warning", {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1"
    });
  }, []);

  return (
    <button
      className="flex items-center justify-center gap-[10px] px-8 py-4 text-white relative"
      style={{
        backgroundImage: `url(${btn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        backgroundPosition: "center",
      }}
    >
      {BtnIcon && <img src={BtnIcon} alt="icon" className="h-[2rem] w-[2rem]" />}
      {Label && <span className=" md:text-[32px] font-angrybirds">{Label}</span>}
      <img src={Warning} id="warning" alt="warning" className="absolute top-[-25%] left-[-8%] md:left-[-3%]"/>
    </button>
  );
};

export default Button;
