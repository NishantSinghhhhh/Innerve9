import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import BlinkingDot from "../components/blinking.jsx";
import Sphere from "../components/sphere.jsx"; // Import the Sphere component
import contactCtaImage from "../assets/contact-cta.png";
import menuBtnImage from "../assets/menu-btn.png";
import mapFrameImage from "../assets/card.png";

import { Canvas } from "@react-three/fiber"; // Import Canvas from R3F

const Footer = () => {
  return (
    <div className="flex font-tthoves flex-col text-white w-full min-h-[25vh]">
      {/* Main Content Layout */}
      <div className="flex flex-col xl:flex-row justify-between items-center px-6 xl:px-20 py-10 gap-8">
        {/* 3D Sphere Section */}
        <div className="flex justify-center items-center xl:w-1/4 mt-8">
          <Canvas>
          <ambientLight intensity={1.9} />
            <directionalLight position={[1.6, 1.6, 1.6]} />
            <Sphere position={[0, 0, 0]} args={[3.1, 32, 32]} /> {/* Render the 3D Sphere */}
          </Canvas>
        </div>

        {/* Presented By Section */}
        <div className="xl:w-1/4 text-center xl:text-left">
          <h3 className="text-xl font-semibold mb-4 mt-16">PRESENTED BY</h3>
          <p className="text-gray-500 mb-1">Open Source Software Club</p>
          <p className="text-gray-500 mb-1">Army Institute of Technology Pune</p>
          <a href="#" className="inline-block mt-4">
            <img src={menuBtnImage} alt="OSS Club Menu Button" className="w-36 h-auto" />
          </a>
        </div>

        {/* Contact Us Section */}
        <div className="xl:w-1/4">
          <h3 className="text-xl font-semibold mb-3 text-center xl:text-left mt-8">CONTACT US</h3>
          <div className="space-y-6">
            {/* Kaushal Vyas Contact */}
            <div className="relative w-full max-w-xs mx-auto xl:mx-0 ">
              <p className="text-center text-gray-500 xl:text-left font-semibold mb-1">Kaushal Vyas</p>
              <div className="num flex items-center justify-start ">
                <img src={contactCtaImage} alt="Contact CTA" className="w-44 h-auto object-cover" />
                <p className="absolute text-sm ml-8">
                +91 86689 52920
                </p>
              </div>
            </div>

            {/* Deepshikha Rawat Contact */}
            <div className="relative w-full max-w-xs mx-auto xl:mx-0">
              <p className="text-center xl:text-left text-gray-500 font-semibold mb-1">Deepshika Rawat</p>
              <div className="num flex items-center justify-start">
                <img src={contactCtaImage} alt="Contact CTA" className="w-44 h-auto object-cover" />
                <p className="absolute text-sm ml-8">
                  +91 63987 93447
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="xl:w-1/4 flex flex-col items-center xl:items-start mt-4">
          <h3 className="text-xl font-semibold mb-2 ">Venue</h3>
          <div className="relative w-[280px] h-[200px] mt-2 xl:ml-[-40px]">
            <img
              src={mapFrameImage}
              alt="Map Frame"
              className="absolute w-full h-full object-contain"
            />
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2698970162255!2d73.87251157543034!3d18.606926382503463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c710e77af169%3A0x585dffe6ae2cf0f0!2s20%2C%20St%20Dnyaneshwar%20Rd%2C%20Runwal%20Park%2C%20Vijay%20Nagar%2C%20Dighi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411015!5e0!3m2!1sen!2sin!4v1732267644510!5m2!1sen!2sin"
              width="180"
              height="180"
              className="absolute top-[10px] left-[48px] right-[10px] bottom-[10px] border-none rounded-xl"
              allowFullScreen=""
              loading="fast"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[2px] bg-white opacity-30"></div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-3 px-4 flex justify-between items-center">
        {/* Left Section: Registration Open */}
        <div className="flex items-center space-x-2">
          <BlinkingDot />
        </div>

        {/* Center Section: Made with Love */}
        <div className="text-center text-sm hidden md:block">
          Made with <span className="text-red-500">❤️</span> by Open Source Software Club
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/ossclub.ait/" className="text-gray-400 hover:text-white">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaDiscord size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/open-source-software-club/posts/?feedView=all"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
