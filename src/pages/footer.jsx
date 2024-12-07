import React from "react";
import './footer.css'; 

import ring from "../assets/ring.svg";
import roth from "../assets/roth.svg";
import linkedIn from "../assets/in.svg";
import instagram from "../assets/insta.svg";
import discord from "../assets/disc.svg";
import twitter from "../assets/x.svg";
import contactUs from "../assets/contact-us.svg";
import venue from "../assets/venue.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="object-1">
        <img src={ring} alt="Ring" className="ring" />
        <img src={roth} alt="Planet" className="planet" />
      </div>

      <div className="object-2">
        <img src={linkedIn} alt="LinkedIn" />
        <img src={instagram} alt="Instagram" />
        <img src={discord} alt="Discord" />
        <img src={twitter} alt="Twitter" />
      </div>

      <div className="additional-images">
        <img src={contactUs} alt="Contact" />
        <img src={venue} alt="Venue" />
      </div>
    </div>
  );
};

export default Footer;
