// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {


  return (
    <>
        <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1>
        
    </>
  );
}
const App = () => {
  const cardsData = [
    { imageSrc: './assets/Edtech.png', label: 'EdTech' },
    { imageSrc: './assets/health.png', label: 'Health' },
    { imageSrc: './assets/ARVR.png', label: 'AR-VR' },
    { imageSrc: './assets/Game.png', label: 'GameDev' },
    { imageSrc: './assets/Block Chain.png', label: 'BlockChain' },
    { imageSrc: './assets/Cyber.png', label: 'CyberSec' },
    { imageSrc: './assets/Defence.png', label: 'Defence' },
    { imageSrc: './assets/FinTech.png', label: 'FinTech' },
    { imageSrc: './assets/Logi.png', label: 'Logistics' },
  ];

  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} label={card.label} />
      ))}
    </div>
  );
};

export default App;
