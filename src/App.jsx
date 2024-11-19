
import React from 'react';
import Tracks from './pages/Tracks';  
import Hero from "./components/Hero"
import "./App.css";
import Cards from "./components/Cards/index"

function App() {
  return (
    <>
      <Hero /> 
      <Cards/>
      <div className="app-container">
        <Tracks />  
      </div>
    </>
  );
};

export default App;