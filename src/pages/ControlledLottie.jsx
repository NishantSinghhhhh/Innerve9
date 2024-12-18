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

const ControlledLottie = () => {
  const containerRef = useRef(null);
  const [lottieInstance, setLottieInstance] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");

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

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let selectedSegment = null;

      if (scrollPosition < 200) {
        selectedSegment = "scrollingEyes";
      } else if (scrollPosition >= 200 && scrollPosition < 400) {
        selectedSegment = "helloThumbsUp";
      } else if (scrollPosition >= 400 && scrollPosition < 600) {
        selectedSegment = "shocked";
      } else if (scrollPosition >= 600 && scrollPosition < 800) {
      } else {
        selectedSegment = "angryBird";
      }

      if (selectedSegment) {
        const segment = animationSegments[selectedSegment];
        lottieInstance.playSegments([segment.start, segment.end], true);
        setCurrentMessage(segmentMessages[selectedSegment]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lottieInstance]);

  return (
    <div className="fixed  -bottom-4 left-0 w-full z-10">
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px]"
      ></div>
      {/* {currentMessage && (
        <p className="absolute top-[5rem] w-[12rem] left-[10rem] md:top-[10rem] md:left-[15rem] md:w-[15rem] rounded-lg p-2 text-center text-sm font-semibold text-black border-2 border-black bg-[#ffff]">
          {currentMessage}
        </p>
      )} */}
    </div>
  );
};

export default ControlledLottie;
