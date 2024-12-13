import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import video from "../assets/Nine.webm";

const Loader = () => {
  const videoRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {

    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
    const tl = gsap.timeline();

    // Add animation to move loader off-screen after 5 seconds
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1.5,
      ease: "power2.out",
      delay: 5, // 5-second delay before animation starts
      onComplete: () => {
        // Optional: Hide the loader completely after animation
        loaderRef.current.style.display = 'none';
      }
    });

    // Cleanup function
    return () => {
      tl.kill(); // Stop the timeline if component unmounts
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div
      ref={loaderRef}
      className="bg-white h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 z-50"
    >
      <div className="flex items-center justify-center h-[300px] w-[300px]">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;