import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
import Footer from "./pages/Footer";
import Noise from "./components/noise";

import React from "react";


function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden relative">
      <Hero />
      <Cards />
      <Tracks />
      <Timeline/>
      <Sponsors/>
      <Footer/>
      <Noise />
    </div>
  );
}

export default App;
