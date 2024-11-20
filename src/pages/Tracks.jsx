import React from "react";
import "./Tracks.css";

// Import images from src/assets
import EdtechImg from "../assets/Edtech.png";
import HealthImg from "../assets/health.png";
import ARVRImg from "../assets/ARVR.png";
import GameImg from "../assets/Game.png";
import BlockChainImg from "../assets/Block Chain.png";
import CyberImg from "../assets/Cyber.png";
import DefenceImg from "../assets/Defence.png";
import FinTechImg from "../assets/FinTech.png";
import LogiImg from "../assets/Logi.png";

const Card = ({ imageSrc, label }) => {
  return (
    <div className="card-wrapper" style={{ position: "relative" }}>
      <div className="card" style={{ position: "relative" }}>
        <img src={imageSrc} alt={label} />
      </div>
      <h2 style={{ position: "absolute" }}>{label}</h2>
    </div>
  );
};

const Tracks = () => {
  const cardsData = [
    { imageSrc: ARVRImg },
    { imageSrc: EdtechImg },
    { imageSrc: HealthImg },
    { imageSrc: GameImg },
    { imageSrc: FinTechImg },
    { imageSrc: CyberImg },
    { imageSrc: DefenceImg },
    { imageSrc: BlockChainImg },
    { imageSrc: LogiImg },
  ];

  return (
    <div
      className="tracks-container w-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        className="tracks-heading"
        style={{
          gridColumn: "span 3",
          justifySelf: "center",
          fontSize: "60px",
          fontFamily: "AngryBirds",
        }}
      >
        TRACKS
      </h1>
      {cardsData.map((card, index) => (
        <div
          key={index}
          style={{ transform: "translate(0, 0)", justifySelf: "center" }}
        >
          <Card imageSrc={card.imageSrc} label={card.label} />
        </div>
      ))}
    </div>
  );
};

export default Tracks;
