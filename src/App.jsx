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

function App() {
  const [showLottie, setShowLottie] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const heroSectionRef = useRef(null);
  const lenisRef = useRef(null);
  const videoRef = useRef(null); // Ref to control video playback

  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    if (heroSectionRef.current && !isLoading) {
      heroSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 5000);

    setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    // Speed up the video playback once it's loaded
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set playback rate to 2x speed
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-[120px] justify-center items-center overflow-x-hidden relative">
      {isLoading && (
        <div
          id="loader"
          className="absolute top-0 z-[1000] w-full h-screen bg-white flex justify-center items-center"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <video
            ref={videoRef} // Attach ref to the video element
            src={video}
            autoPlay
            loop
            muted
            className="md:h-[300px] h-[150px] object-cover"
          />
        </div>
      )}

      <section ref={heroSectionRef} id="hero-section">
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
    </div>
  );
}

export default App;
