// ControlledLottie.js
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../../public/lottie-redbot-v7.json";
import "../index.css"

// Animation segments mapping
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

// Messages for each animation segment
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
  const observerRef = useRef(null);
  
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

  // Mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize Lottie
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
    
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
          progressiveLoad: true,
          hideOnTransparent: true,
          className: isIOS ? 'ios-lottie': 'lottie',
          preserveAspectRatio: 'xMidYMid meet'
        }
      });

      const handleAnimationError = (error) => {
        console.error('Lottie animation error:', error);
      };

      const handleAnimationComplete = () => {
        setIsAnimating(false);
      };

      anim.addEventListener('error', handleAnimationError);
      anim.addEventListener("complete", handleAnimationComplete);

      setLottieInstance(anim);
      setCurrentMessage("Welcome to Innerve.tech!");

      return () => {
        anim.removeEventListener('error', handleAnimationError);
        anim.removeEventListener("complete", handleAnimationComplete);
        anim.destroy();
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  // Scroll handling with Intersection Observer
  useEffect(() => {
    if (!lottieInstance) return;

    const handleIntersection = (entries) => {
      if (isAnimating) return;

      const entry = entries[0];
      if (entry.isIntersecting) {
        const scrollPosition = window.scrollY;
        let selectedSegment = "";

        if (isMobile) {
          if (scrollPosition >= 0 && scrollPosition < 300) {
            selectedSegment = "helloThumbsUp";
          } else if (scrollPosition >= 300 && scrollPosition < 2400) {
            selectedSegment = "shocked";
          } else if (scrollPosition >= 2400 && scrollPosition < 4800) {
            selectedSegment = "sleeping";
          } else if (scrollPosition >= 4800 && scrollPosition < 8400) {
            selectedSegment = "runComeBack";
          } else if (scrollPosition >= 8400 && scrollPosition < 12000) {
            selectedSegment = "scrollingEyes";
          } else if (scrollPosition >= 12000 && scrollPosition < 14400) {
            selectedSegment = "screaming";
          } else {
            selectedSegment = "ohSit";
          }
        } else {
          if (scrollPosition < 700) {
            selectedSegment = "helloThumbsUp";
          } else if (scrollPosition >= 700 && scrollPosition < 1800) {
            selectedSegment = "shocked";
          } else if (scrollPosition >= 1800 && scrollPosition < 3400) {
            selectedSegment = "sleeping";
          } else if (scrollPosition >= 3400 && scrollPosition < 5800) {
            selectedSegment = "runComeBack";
          } else if (scrollPosition >= 5800 && scrollPosition < 7300) {
            selectedSegment = "scrollingEyes";
          } else if (scrollPosition >= 7300 && scrollPosition < 8400) {
            selectedSegment = "screaming";
          } else {
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
      }
    };

    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px'
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);
    
    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lottieInstance, isAnimating, currentSegment, isMobile]);

  return (
    <div className="fixed -bottom-4 left-0 w-full z-10 flex items-center">
      <div
        ref={containerRef}
        className="w-[200px] h-[200px] -ml-[20px] md:w-[300px] md:h-[300px] transform-gpu"
      />
      <div className="absolute font-tthoves left-[8rem] md:left-[13rem] text-center text-black border-2 border-white bg-white/70 p-2 rounded-xl md:p-2 md:rounded-lg shadow-lg backdrop-blur-sm max-w-xs transform-gpu">
        {currentMessage}
      </div>
    </div>
  );
};

export default ControlledLottie;