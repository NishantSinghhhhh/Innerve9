import React from "react";
import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
import Devfolio from "../assets/devfolio.svg";
import Tnt from "../assets/bubble-tnt.svg";
import Dates from "./Dates";
import Stars from "./Stars";
import Floating from "./Floating";
import Heading from "./Heading";
import Portal from "./Portal";
// import Red from "../assets/red.svg";
// import Blue from "../assets/blue.svg";
// import Yellow from "../assets/yellow.svg";
// import White from "../assets/white.svg";
import "../index.css"

const Hero = () => {
  const handleEnd = () => {
    alert("Innerve 9 is now LIVE!!");
  };
  return (
    <section id="hero" className="relative w-screen flex flex-col justify-center items-center gap-[120px]">
      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <Heading />
        <FlipCountdown targetDate="2025-02-07T00:00:00" onEnd={handleEnd} />
        <Button BtnIcon={Devfolio} Label="APPLY WITH DEVFOLIO" />
      </div>
      <Dates />
      <Stars />
      <Floating />
      <div className="hidden lg:flex absolute -left-14 top-[45%]">
        <img src={Tnt} alt="tnt" />
      </div>
      <div className="hidden lg:flex absolute top-56 left-20">
        <Portal />
      </div>
    </section>
  );
};

export default Hero;
