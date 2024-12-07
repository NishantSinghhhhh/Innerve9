import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";

import Footer from "./pages/Footer";

import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";

import Noise from "./components/noise";


import React from "react";


function App() {
  return (
    <div className="h-full w-full flex flex-col gap-[120px] justify-center items-center overflow-x-hidden relative">
      <Hero />
      
      <Cards />
      <Tracks />

      <Footer />
      <Timeline/>
      <Sponsors/>
      <Footer/>
      <Noise />
    </div>
  );
}

export default App;
