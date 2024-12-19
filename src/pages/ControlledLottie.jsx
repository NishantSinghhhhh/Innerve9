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
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSegment, setCurrentSegment] = useState("");

  // Object to keep track of the loop count for each animation segment
  const loopCounts = useRef({
    helloThumbsUp: 0,
    shocked: 0,
    sleeping: 0,
    runComeBack: 0,
    laughing: 0,
    screaming: 0,
    ohSit: 0,
    bored: 0,
    scrollingEyes: 0,
    dizziness: 0,
    furiousFace: 0,
    thinking: 0,
    lookingAround: 0,
    angryBird: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      // Add complete listener to handle animation completion
      anim.addEventListener('complete', () => {
        setIsAnimating(false);
      });

      setLottieInstance(anim);

      return () => {
        anim.removeEventListener('complete');
        anim.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (!lottieInstance) return;

    const handleScroll = () => {
      if (isAnimating) return; // Skip if animation is already playing

      const scrollPosition = window.scrollY;
      let selectedSegment = "";

      // Determine which segment to play based on scroll position
      if (scrollPosition < 200) {
        selectedSegment = "helloThumbsUp";
      } else if (scrollPosition >= 200 && scrollPosition < 700) {
        selectedSegment = "helloThumbsUp";
      } else if (scrollPosition >= 700 && scrollPosition < 1800) {
        selectedSegment = "shocked";
      } else if (scrollPosition >= 1800 && scrollPosition < 3400) {
        selectedSegment = "sleeping";
      } else if (scrollPosition >= 3400 && scrollPosition < 5800) {
        selectedSegment = "runComeBack";
      } else if (scrollPosition >= 5800 && scrollPosition < 7300) {
        selectedSegment = "laughing";
      } else if (scrollPosition >= 7400 && scrollPosition < 8400) {
        selectedSegment = "screaming";
      } else if (scrollPosition >= 8400 && scrollPosition < 10400) {
        selectedSegment = "ohSit";
      }

      // Only play animation if we have a selected segment and it's different from current
      if (selectedSegment && selectedSegment !== currentSegment) {
        const segment = animationSegments[selectedSegment];
        setIsAnimating(true);
        setCurrentSegment(selectedSegment);

        // Reset the loop count for this segment
        loopCounts.current[selectedSegment] = 0;

        const playAnimation = () => {
          if (loopCounts.current[selectedSegment] < 10) {
            lottieInstance.playSegments([segment.start, segment.end], true);
            loopCounts.current[selectedSegment] += 1;
            lottieInstance.addEventListener("complete", playAnimation);
          } else {
            lottieInstance.removeEventListener("complete", playAnimation);
            setIsAnimating(false);
          }
        };

        playAnimation();

        setCurrentMessage(segmentMessages[selectedSegment]);
      }
    };

    // Debounce the scroll handler to prevent too many updates
    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lottieInstance, isAnimating, currentSegment]);

  return (
    <div className="fixed -bottom-4 left-0 w-full z-10">
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px]"
      ></div>
      {/* Optional message display */}
      {/* {currentMessage && (
        <p className="absolute top-[5rem] w-[12rem] left-[10rem] md:top-[10rem] md:left-[15rem] md:w-[15rem] rounded-lg p-2 text-center text-sm font-semibold text-black border-2 border-black bg-[#ffff]">
          {currentMessage}
        </p>
      )} */}
    </div>
  );
};

export default ControlledLottie;
