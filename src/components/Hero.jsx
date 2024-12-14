import React from "react";
import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
import Devfolio from "../assets/devfolio_1.svg";
import Tnt from "../assets/bubble-tnt.svg";
import Dates from "./Dates";
import Stars from "./Stars";
import Floating from "./Floating";
import Heading from "./Heading";
import Portal from "./Portal";
import Grids from "../assets/all_grids.svg";
import BubblePiggy from "../assets/bubble-piggy.svg";
import RenderFloating from "../components/Floating";
import Red from "../assets/red.svg";
import Blue from "../assets/blue.svg";
import Yellow from "../assets/yellow.svg";
import White from "../assets/white.svg";
import "../index.css";
import CountdownExample from "./FlipClockCountdown";

// comit by ujjwal
const Hero = () => {
  const handleEnd = () => {
    alert("Innerve 9 is now LIVE!!");
  };

  return (
    <section
      id="hero"
      className="relative w-screen flex flex-col justify-center items-center gap-[120px]"
      style={{
        backgroundImage: ` url(${Grids})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <Heading />
        <FlipCountdown targetDate="2025-02-07T00:10:00" onEnd={handleEnd} />
        {/* <CountdownExample /> */}
        <Button BtnIcon={Devfolio} Label="APPLY WITH DEVFOLIO" />
      </div>
      <Dates />
      <Stars />
      <RenderFloating imgSrc={BubblePiggy} />
      <div className="hidden lg:flex absolute -left-14 top-[45%]">
        <img src={Tnt} alt="tnt" />
      </div>
      <div className="hidden lg:flex absolute top-56 left-20">
        <Portal  birdImage={Red}/>
      </div>
        <div className=" hidden lg:flex absolute  right-[20px] top-[25%]">
          <Portal  birdImage={Blue}/>
        </div>

        <div className="hidden lg:flex absolute top-[70%] right-[10%]">
          <Portal  birdImage={Yellow}/>
        </div>

        <div className="hidden lg:flex absolute top-[80%] left-[10%]">
          <Portal  birdImage={White}/>
        </div>
    </section>
  );
};

export default Hero;
