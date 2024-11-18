import React from 'react';
import './Tracks.css';

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

export default Card;
