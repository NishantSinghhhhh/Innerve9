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
  helloThumbsUp: "Welcome to Innerve.tech!",
  bored: "Not interested in Tracks",
  laughing: "How funny !!",
  dizziness: "This is too much to handle!",
  screaming: "Yipeeeee , I did something !!",
  thinking: "Deep in thought...",
  shocked: "Such a big Pool Prize!",
  sleeping: "Taking a quick nap...",
  furiousFace: "You made me angry now you see ",
  ohSit: "Contacting Team Innerve Soon!",
  lookingAround: "Looking around sneakily!",
  runComeBack: "Packing my Bags just wait",
  angryBird: "Feeling like an angry bird!",
};

const ControlledLottie = () => {
  const containerRef = useRef(null);
  const [lottieInstance, setLottieInstance] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSegment, setCurrentSegment] = useState("");
  const [isMobile, setIsMobile] = useState(false);

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
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      anim.addEventListener("complete", () => {
        setIsAnimating(false);
      });

      setLottieInstance(anim);

      return () => {
        anim.removeEventListener("complete");
        anim.destroy();
      };
    }
  }, []);

  // Set the initial message when the component loads
  useEffect(() => {
    setCurrentMessage("Welcome to Innerve.tech!"); // or any initial message
  }, []);

  useEffect(() => {
    if (!lottieInstance) return;

    const handleScroll = () => {
      if (isAnimating) return;

      const scrollPosition = window.scrollY;
      let selectedSegment = "";

      if (isMobile) {
        if (scrollPosition >= 0 && scrollPosition < 300) {
          selectedSegment = "helloThumbsUp";
        } else if (scrollPosition >= 300 && scrollPosition < 2400) {
          selectedSegment = "shocked";
        } else if (scrollPosition >= 2400 && scrollPosition < 4800) {
          selectedSegment = "sleeping";
        }
        else if (scrollPosition >= 4800 && scrollPosition < 8400) {
          selectedSegment = "runComeBack";
        }
        else if (scrollPosition >= 8400 && scrollPosition < 12000) {
          selectedSegment = "scrollingEyes";
        }
        else if (scrollPosition >= 12000 && scrollPosition < 14400) {
          selectedSegment = "screaming";
        }
        else{
          selectedSegment = "ohSit";
        }
      } else {
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
          selectedSegment = "scrollingEyes";
        } else if (scrollPosition >= 7400 && scrollPosition < 8400) {
          selectedSegment = "screaming";
        } else if (scrollPosition >= 8400 && scrollPosition < 10400) {
          selectedSegment = "ohSit";
        }
      }

      if (selectedSegment && selectedSegment !== currentSegment) {
        const segment = animationSegments[selectedSegment];
        setIsAnimating(true);
        setCurrentSegment(selectedSegment);

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
  }, [lottieInstance, isAnimating, currentSegment, isMobile]);

  return (
    <div className="fixed -bottom-4 left-0 w-full z-10 flex items-center">
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px]"
      ></div>

      {/* Positioning the message next to the animation */}
      <div
        className="absolute font-tthoves left-[8rem] md:left-[13rem] text-center text-black border-2 border-white bg-white/70 p-2 rounded-xl md:p-2 md:rounded-lg shadow-lg backdrop-blur-sm max-w-xs"
      >
        {currentMessage}
      </div>
    </div>
  );
};

export default ControlledLottie;
