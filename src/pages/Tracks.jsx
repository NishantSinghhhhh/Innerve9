import React from "react";
import "./Tracks.css";

import HeartImg from "../assets/heart.svg"; 
import RaysImg1 from "../assets/rays.svg"; 
import RaysImg2 from "../assets/rays2.svg"; 
import RaysImg3 from "../assets/rays3.svg"; 


const innerCardColors = [
  "#FA86B4", "#549EDE", "#903CD2", "#903CD2", "#FA86B4", 
  "#549EDE", "#549EDE", "#903CD2", "#FA86B4"
];


const raysImages = [
  RaysImg1, RaysImg2, RaysImg3, RaysImg3, RaysImg1, 
  RaysImg2, RaysImg2, RaysImg3, RaysImg1
];
const labels = [
  "AR/VR", "EdTech", "Health", "Gaming", "FinTech", 
  "CyberSec", "Defence", "Blockchain", "Logistics"
];

const Card = ({ innerColor, raysImage }) => {
  return (
    <div className="outer-card">
      <img src={HeartImg} alt="Heart" className="heart-image" /> 
      <div className="inner-card" style={{ backgroundColor: innerColor }}>
        <img src={raysImage} alt="Rays" className="inner-image" />
      </div>
    </div>
  );
};

const Tracks = () => {
  return (
    <div className="tracks-container">
      <h1 className="tracks-heading">TRACKS</h1>
      <div className="cards-wrapper">
        {innerCardColors.map((innerColor, index) => (
          <div className="card-container" key={index}>
            <Card 
              innerColor={innerColor} 
              raysImage={raysImages[index]} 
            />
            <div className="card-label-container">
              <h2 className="card-label">{labels[index]}</h2> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
