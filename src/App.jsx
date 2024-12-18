// // import { useState } from "react";
// import Tracks from "./pages/Tracks";
// import Hero from "./components/Hero";
// import "./App.css";
// import Cards from "./components/Cards/index";
// import Timeline from "./pages/Timeline";
// import Sponsors from "./pages/Sponsors";
// // import Footer from "./pages/Footer";
// import Noise from "./components/noise";
// import Testimonials from "./pages/Testimonials";
// import SponsorUs from "./pages/SponsorUs";
// import React from "react";
// import Footer2 from "./pages/Footer2";
// import Footer1 from "./pages/Foooter1";

// function App() {
//   return (
//     <div className="h-full w-full flex flex-col gap-[120px] justify-center items-center overflow-x-hidden relative">
//           <Hero />
//           <Cards />
//           <Tracks />
//           <Timeline />
//           <Testimonials />
//           <Sponsors />
//           <SponsorUs />
//           <Footer1 />
//           <Noise />
//     </div>
//   );
// }

// export default App;


import React from "react";
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
      <footer id="footer-section">
        <Footer1 />
      </footer>
      <Noise />
    </div>
  );
}

export default App;
