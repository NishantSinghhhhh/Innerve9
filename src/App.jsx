import React, { useState, useEffect, useRef } from "react";
import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
import Testimonials from "./pages/Testimonials";
import SponsorUs from "./pages/SponsorUs";
import Footer1 from "./pages/Foooter1";
import Noise from "./components/noise";
import FAQs from "./pages/FAQs";
import ControlledLottie from "./pages/ControlledLottie";
import Lenis from "@studio-freight/lenis";
import video from "./assets/Nine.webm";
import gsap from "gsap";

function App() {
  const [showLottie, setShowLottie] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const lenisRef = useRef(null);

  // Function to disable scroll
  const disableScroll = () => {
    // Prevent default wheel event
    document.addEventListener('wheel', preventDefault, { passive: false });
    // Prevent default touchmove event
    document.addEventListener('touchmove', preventDefault, { passive: false });
    // Disable scrolling with keys
    document.addEventListener('keydown', preventDefaultForScrollKeys);
    
    // Set overflow hidden on body
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // If using Lenis, pause it
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  // Function to enable scroll
  const enableScroll = () => {
    document.removeEventListener('wheel', preventDefault, { passive: false });
    document.removeEventListener('touchmove', preventDefault, { passive: false });
    document.removeEventListener('keydown', preventDefaultForScrollKeys);
    
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // If using Lenis, resume it
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  // Prevent default for events
  const preventDefault = (e) => {
    e.preventDefault();
  };

  // Prevent scrolling with keys
  const preventDefaultForScrollKeys = (e) => {
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }

    // Disable scroll immediately
    disableScroll();

    // Handle loader animation
    setTimeout(() => {
      gsap.to("#loader", {
        y: "-100%",
        duration: 0.4,
        onComplete: () => {
          setIsLoading(false);
          enableScroll();
        },
      });
    }, 4000);

    // Cleanup
    return () => {
      enableScroll();
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    lenisRef.current = lenis;

    // If still loading, don't start Lenis
    if (isLoading) {
      lenis.stop();
    }

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-[120px] justify-center items-center overflow-x-hidden relative">
      <section id="hero-section">
        <Hero />
      </section>
      <section id="cards-section">
        <Cards />
      </section>
      <section id="tracks-section">
        <Tracks />
      </section>
      <section id="timeline-section">
        <Timeline />
      </section>
      <section id="testimonials-section">
        <Testimonials />
      </section>
      <section id="sponsors-section">
        <Sponsors />
      </section>
      <section id="Faqs">
        <FAQs />
      </section>
      <section id="sponsor-us-section">
        <SponsorUs />
      </section>
      <section className="w-full" id="footer-section">
        <Footer1 />
      </section>
      <Noise />
      {showLottie && <ControlledLottie />}
      
      <div id="loader" className="absolute top-0 z-1000 w-full h-screen bg-white flex justify-center items-center">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          className="h-[300px] object-cover"
        />
      </div>
    </div>
  );
}

export default App;