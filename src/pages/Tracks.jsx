import React from 'react';
import './Tracks.css';

// Import images from src/assets
import EdtechImg from '../assets/Edtech.png';
import HealthImg from '../assets/health.png';
import ARVRImg from '../assets/ARVR.png';
import GameImg from '../assets/Game.png';
import BlockChainImg from '../assets/Block Chain.png';
import CyberImg from '../assets/Cyber.png';
import DefenceImg from '../assets/Defence.png';
import FinTechImg from '../assets/FinTech.png';
import LogiImg from '../assets/Logi.png';

const Card = ({ imageSrc, label }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={imageSrc} alt={label} />
      </div>
      <h2>{label}</h2>
    </div>
  );
};

const Tracks = () => {
  const cardsData = [
    { imageSrc: EdtechImg, },
    { imageSrc: HealthImg, },
    { imageSrc: ARVRImg, },
    { imageSrc: GameImg,  },
    { imageSrc: BlockChainImg, },
    { imageSrc: CyberImg, },
    { imageSrc: DefenceImg,  },
    { imageSrc: FinTechImg,  },
    { imageSrc: LogiImg, },
  ];

  return (
    <div className="tracks-container">
      {cardsData.map((card, index) => (
        <Card key={index} imageSrc={card.imageSrc} label={card.label} />
      ))}
    </div>
  );
};

export default Tracks;
