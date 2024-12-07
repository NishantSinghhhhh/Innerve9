import React from "react";
import roth from "../assets/roth.svg"; 
import linkedin from "../assets/in.svg";
import discord from "../assets/disc.svg";
import instagram from "../assets/insta.svg";
import xLogo from "../assets/x.svg";
import contactUs from "../assets/contact-us.svg";
import venue from "../assets/venue.svg";
import "./footer.css";

const Footer=()=> {
  return (
    <div className="container">
      <div className="rot">
        <div className="planet">
          <img src={roth} alt="Rotating Planet" />
        </div>
      </div>
      <div className="social">
        <img src={linkedin} alt="LinkedIn" />
        <img src={discord} alt="Discord" />
        <img src={instagram} alt="Instagram" />
        <img src={xLogo} alt="X (formerly Twitter)" />
      </div>
      <div className="contact">
        <img src={contactUs} alt="Contact Us" />
      </div>
      <div className="venue">
        <img src={venue} alt="Venue" />
      </div>
    </div>
  );
}

export default App;
