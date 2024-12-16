import React from "react";
import creamRoth from "../assets/creamRoth.svg";
import cord from "../assets/cord.svg";
import gram from "../assets/gram.svg";
import ins from "../assets/ins.svg";
import twir from "../assets/twir.svg";
import lock from "../assets/lock.svg";
import mapFrameImage from "../assets/card.png";
import "./Footer2.css";

const Footer2 = () => {
  return (
    <div className="all">
    <div className="solar-system">
    <div className="sun"><img src={creamRoth} alt="" />
    <div className="board">CONNECT WITH US!</div>
    </div>
    <div className="planet planet1"><img src={lock} alt="" /></div>
    <div className="planet planet10"><img src={lock} alt="" /></div>
    <div className="planet planet2"><img src={gram} alt="" /></div>
    <div className="planet planet3"><img src={lock} alt="" /></div>
    <div className="planet planet4"><img src={twir} alt="" /></div>
    <div className="planet planet5"><img src={cord} alt="" /></div>
    <div className="planet planet6"><img src={lock} alt="" /></div>
    <div className="planet planet7"><img src={ins} alt="" /></div>
    <div className="planet planet8"><img src={lock} alt="" /></div>
    <div className="planet planet9"><img src={lock} alt="" /></div>
  </div>
  <div className="contact">
    <div className="sec1"></div>
    <div className="sec2"></div>
    <div className="map"> 
        <iframe
          title="Venue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2698970162255!2d73.87251157543034!3d18.606926382503463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c710e77af169%3A0x585dffe6ae2cf0f0!2s20%2C%20St%20Dnyaneshwar%20Rd%2C%20Runwal%20Park%2C%20Vijay%20Nagar%2C%20Dighi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411015!5e0!3m2!1sen!2sin!4v1732267644510!5m2!1sen!2sin"
          width="180"
          height="180"
          className=""
          allowFullScreen=""
          loading="fast"
          ></iframe></div>
  </div>
  </div>
);
};


export default Footer2;
