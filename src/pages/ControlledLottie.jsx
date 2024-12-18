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
  const [showMessage, setShowMessage] = useState(false);
  const [glowActive, setGlowActive] = useState(false);

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

      setShowMessage(false);
        setTimeout(() => {
          setCurrentMessage(segmentMessages[segmentName]);
          setShowMessage(true);
        });

        currentIndex = (currentIndex + 1) % segmentKeys.length;
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [lottieInstance]);

  useEffect(() => {
    const handleOutsideClick = () => {
      if (glowActive) {
        setGlowActive(false); // Hide the glow when clicking anywhere
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [glowActive]);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent triggering the global click handler
    setGlowActive((prev) => !prev);
  };

  return (
    <div className="fixed -bottom-4 left-0 w-full" style={{ zIndex: 1000 }}>
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px]"
        onClick={handleClick}
      ></div>

  {showMessage && (
        <p className="absolute top-[5rem] w-[12rem] left-[10rem] md:top-[10rem] md:left-[15rem] md:w-[15rem] rounded-lg p-2 text-center text-sm font-semibold text-black border-2 border-black bg-[#ffff]">
          {currentMessage}
        </p>
      )}
      {/* <div className={`glow-animation ${glowActive ? "active" : "hidden"}`}></div>

      <style jsx>{`
        .glow-animation {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 10%;
          background: linear-gradient(
            to top,
            rgba(255, 0, 0, 0.8) 0%,
            rgba(255, 0, 0, 0) 70%
          );
          z-index: 999;
          display: none;
        }

        .glow-animation.active {
          display: block;
        }

        @media (max-width: 768px) {
          .glow-animation {
            display: block;
          }
        }
      `}</style> */}
    </div>
  );
};

const App = () => {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 5000); // Delay of 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return <div>{showLottie && <ControlledLottie />}</div>;
};

export default App;
