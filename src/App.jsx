import React, { useState, useEffect } from "react";
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
import ControlledLottie from "./pages/ControlledLottie";

function App() {
  const [showLottie, setShowLottie] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(true);
    }, 5000); // Delay rendering by 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
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
