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
    <div className="relative overflow-hidden">
      <img src={Port} alt="port" />
      <img
        ref={birdRef}
        src={birdImage}
        alt="bird"
        className="absolute top-6 left-[50%] -translate-x-1/2"
      />
    </div>
  );
};

export default Portal;
