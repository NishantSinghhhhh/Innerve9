import { useState } from "react";
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
import Footer1 from "./pages/Foooter1";
import Loader from "./pages/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); 

  const handleLoaderComplete = () => {
    setIsLoading(false);
  }


  return (
    <div className="h-full w-full flex flex-col gap-[120px] justify-center items-center overflow-x-hidden relative">
      {isLoading && <Loader onComplete={handleLoaderComplete} />} {/* Show loader only while loading */}
      {!isLoading && ( // Render app content only when loader is hidden
        <>
          <Hero />
          <Cards />
          <Tracks />
          <Timeline />
          <Testimonials />
          <Sponsors />
          <SponsorUs />
          <Footer1 />
          <Noise />
        </>
      )}
    </div>
  );
}

export default App;
