import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
import Unstop from "../assets/unstop.png";
import Tnt from "../assets/bubble-tnt.svg";
import Dates from "./Dates";
import Stars from "./Stars";
import Heading from "./Heading";
import Portal from "./Portal";
import Grids from "../assets/all_grids.svg";
import BubblePiggy from "../assets/bubble-piggy.svg";
import Floating from "../components/Floating";
import Red from "../assets/red.svg";
import Blue from "../assets/blue.svg";
import Yellow from "../assets/yellow.svg";
import White from "../assets/white.svg";
import "../index.css";
import video from "../assets/Nine.webm";
import gsap from "gsap";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }

    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };
    disableScroll();

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    setTimeout(() => {
      gsap.to("#loader", {
        y: "-100%",
        duration: 0.4,
        onComplete: enableScroll,
      });
    }, 4000);

    const birdAnimations = ["#red-bird", "#blue-bird", "#yellow-bird", "#white-bird"];
    birdAnimations.forEach((selector) => {
      gsap.to(selector, {
        y: 20,
        duration: 2.0,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  const handleEnd = () => {
    alert("Innerve 9 is now LIVE!!");
  };

  return (
    <section
      id="hero"
      className="relative w-screen flex flex-col justify-center items-center gap-[120px]"
      style={{
        backgroundImage: `url(${Grids})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <Heading />
        <FlipCountdown targetDate="2025-02-07T00:10:00" onEnd={handleEnd} />
        <a href="https://Innerve.openinapp.link/Register">
          <Button BtnIcon={Unstop} Label="APPLY WITH UNSTOP" />
        </a>
      </div>
      <Dates />
      <Stars />
      <div className="-z-10 absolute left-[0%] bottom-[-26%] w-screen">
        <Floating imgSrc={BubblePiggy} />
      </div>
      <div className="hidden lg:flex absolute -left-14 top-[45%]">
        <img src={Tnt} alt="tnt" />
      </div>

      {/* Birds and Portals */}
      {[
        { id: "red-bird", src: Red, style: "top-56 left-20" },
        { id: "blue-bird", src: Blue, style: "top-[25%] right-[20px]" },
        { id: "yellow-bird", src: Yellow, style: "top-[70%] right-[10%]" },
        { id: "white-bird", src: White, style: "top-[80%] left-[10%] bottom-[13%]" },
      ].map((bird) => (
        <div key={bird.id} className={`hidden lg:flex absolute ${bird.style}`}>
          <div className="relative">
            <Portal />
            <img
              src={bird.src}
              // alt={`${bird.id.replace("-bird", "")} bird`}
              id={bird.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      ))}

      <div
        id="loader"
        className="absolute top-0 z-1000 w-full h-screen bg-white flex justify-center items-center"
      >
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          className="h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
