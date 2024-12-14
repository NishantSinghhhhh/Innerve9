import React, { useEffect } from "react";
import Port from "../assets/portal.svg";
import gsap from "gsap";

const Portal = ({ birdImage }) => {
  useEffect(() => {
    gsap.fromTo(
      "#bird",
      { y: -20 }, // Starting position
      {
        y: 20, // Ending position
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation direction
        ease: "power1.inOut", // Smooth easing
        duration: 2, // Duration of the animation
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img src={Port} alt="port" />
      <img
        id="bird"
        src={birdImage}
        alt="bird"
        className="absolute top-6 left-[50%] -translate-x-1/2"
      />
    </div>
  );
};

export default Portal;
