// import { useState } from "react";
import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
// import Footer from "./pages/Footer";
import Noise from "./components/noise";
import Testimonials from "./pages/Testimonials";
import SponsorUs from "./pages/SponsorUs";
import React from "react";
import Footer2 from "./pages/Footer2";
import Footer1 from "./pages/Foooter1";
import ControlledLottie from "./pages/ControlledLottie"

function App() {
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
      <section  className="w-full" id="footer-section">
        <Footer1 />
      </section>
      <Noise />
      {/* <ControlledLottie src="../public/lottie-redbot-v7.json" loop autoplay/> */}
    </div>
  );
}

export default App;