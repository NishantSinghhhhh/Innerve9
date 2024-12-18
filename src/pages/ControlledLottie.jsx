"use client";
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../public/lottie-redbot-v7.json";

const animationSegments = {
  scrollingEyes: { start: 0, end: 150 },
  helloThumbsUp: { start: 151, end: 250 },
  bored: { start: 251, end: 300 },
  laughing: { start: 301, end: 350 },
  dizziness: { start: 351, end: 450 },
  screaming: { start: 451, end: 490 },
  thinking: { start: 491, end: 560 },
  shocked: { start: 561, end: 650 },
  sleeping: { start: 651, end: 890 },
  furiousFace: { start: 891, end: 960 },
  ohSit: { start: 961, end: 1010 },
  lookingAround: { start: 1011, end: 1070 },
  runComeBack: { start: 1175, end: 1241 },
  angryBird: { start: 0, end: 100 },
};

const segmentMessages = {
  scrollingEyes: "Looking around curiously!",
  helloThumbsUp: "Saying hello with a thumbs up!",
  bored: "Feeling a bit bored...",
  laughing: "Laughing out loud!",
  dizziness: "Feeling a bit dizzy...",
  screaming: "Screaming in excitement!",
  thinking: "Deep in thought...",
  shocked: "Shocked by what just happened!",
  sleeping: "Taking a quick nap...",
  furiousFace: "Looking furious!",
  ohSit: "Sitting down quickly!",
  lookingAround: "Looking around sneakily!",
  runComeBack: "Running back and forth!",
  angryBird: "Feeling like an angry bird!",
};

const segmentKeys = Object.keys(animationSegments);

const ControlledLottie = () => {
  const containerRef = useRef(null);
  const [lottieInstance, setLottieInstance] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [hoveringAngryBird, setHoveringAngryBird] = useState(false);
  const [showText, setShowText] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      setLottieInstance(anim);

      return () => anim.destroy();
    }
  }, []);

  useEffect(() => {
    if (!lottieInstance) return;

    let currentIndex = 0;

    const intervalId = setInterval(() => {
      const segmentName = segmentKeys[currentIndex];
      const segment = animationSegments[segmentName];

      if (segment) {
        lottieInstance.playSegments([segment.start, segment.end], true);
        setCurrentMessage(segmentMessages[segmentName]);

        currentIndex = (currentIndex + 1) % segmentKeys.length;
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [lottieInstance]);

  const handleMouseEnter = () => {
    setShowText(true);
    setExitAnimation(false);  // Reset exit animation
  };

  const handleMouseLeave = () => {
    setShowText(false); // Immediately hide the text
    setTimeout(() => {
      setExitAnimation(true);  // Trigger exit animation after 2 seconds
    }, 2000);  // Wait for 2 seconds before applying the exit animation
  };

  return (
    <div className="fixed -bottom-4 left-0 w-full" style={{ zIndex: 1000 }}>
      <div
        ref={containerRef}
        className="w-[300px] h-[300px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      <p className="absolute top-[10rem] left-[15rem] w-[15rem] rounded-lg p-2 text-center text-lg font-semibold text-black border-2 border-black bg-[#ffff]">
        {currentMessage}
      </p>

    {showText && (
        <div className={`absolute top-[3rem] left-[5rem] animated-slide`}>
          <p className="w-auto rounded-lg p-2 text-center text-lg font-semibold text-white border-2">
            Go Away Red &times;
          </p>
        </div>
      )}

      {exitAnimation && !showText && (
        <div className="absolute top-[12rem] left-[-200px] exit-slide">
          <p className="text-white bg-red-600 rounded-lg px-4 py-2 font-bold shadow-md">
            Go away red!
          </p>
        </div>
      )} 
      <style jsx>{`
        .animated-slide {
          animation: slide-in 1s forwards;
        }

        .exit-slide {
          animation: slide-out 1s forwards;
        }

        @keyframes slide-in {
          from {
            transform: translateX(-200%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-out {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-200%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ControlledLottie;
