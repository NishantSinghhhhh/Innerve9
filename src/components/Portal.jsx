import React, { useEffect, useRef } from "react";
import Port from "../assets/portal.svg";
import { gsap } from "gsap";

const Portal = ({ birdImage }) => {
  const birdRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      birdRef.current,
      { y: -10 }, // Starting position
      {
        y: 10, // End position
        repeat: -1, // Infinite loop
        yoyo: true, // Return to the starting position
        ease: "power1.inOut", // Smooth easing
        duration: 2, // Duration for one complete motion
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden flex justify-center items-center">
      <img src={Port} alt="port" className="w-full h-auto" />
      <img
        ref={birdRef}
        src={birdImage}
        alt="bird"
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Portal;
