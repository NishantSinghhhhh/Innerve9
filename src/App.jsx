import Tracks from "./pages/Tracks";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards/index";
import Timeline from "./pages/Timeline";
import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden gap-48 relative">
      <Hero />
      <Cards />
      <Tracks />
      <Timeline/>

    </div>
  );
}

export default App;
