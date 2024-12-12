import React from "react";
import discord1 from "../assets/discord.svg";
import github from "../assets/github.svg";
import meta from "../assets/meta.svg";
import X_1 from "../assets/X_1.svg";
import linkedIn from "../assets/linkedIn.svg";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import BlinkingDot from "../components/blinking.jsx";
import Sphere from "../components/sphere.jsx"; // Import the Sphere component
import contactCtaImage from "../assets/contact-cta.png";
import menuBtnImage from "../assets/menu-btn.png";
import mapFrameImage from "../assets/card.png";
import roth from "../assets/roth.svg"
import linkedin from "../assets/in.svg";
import discord from "../assets/disc.svg";
import instagram from "../assets/insta.svg";
import xLogo from "../assets/x.svg";
import RotatingRoth from "../components/Rotating_roth.jsx";

const Footer1 = () => {
  return (
    <>
    <div className="w-[100%] h-[35rem] overflow-hidden">
      <div className="flex flex-row justify-between mb-[1.5rem]">

      <div className="">
        <RotatingRoth/>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="flex flex-row gap-4">
          <img src={linkedin} alt="LinkedIn" className="w-15 h-15" />
          <img src={discord} alt="Discord" className="w-15 h-15" />
          <img src={instagram} alt="Instagram" className="w-15 h-15" />
          <img src={xLogo} alt="X (formerly Twitter)" className="w-15 h-15" />
        </div>
      </div>


      <div className="xl:w-1/4 flex flex-col items-center justify-center mt-8">
        <h3 className="text-xl font-semibold mb-3 text-center">CONTACT US</h3>
        <div className="space-y-6 w-full flex flex-col items-center">
          {/* Kaushal Vyas Contact */}
          <div className="relative w-full max-w-xs flex flex-col items-center">
            <p className="text-center text-gray-500 font-semibold mb-1">Kaushal Vyas</p>
            <div className="num flex items-center justify-center">
              <img
                src={contactCtaImage}
                alt="Contact CTA"
                className="w-44 h-auto object-cover"
                />
              <p className="absolute text-xs xl:text-sm">+91 866 895 2920</p>
            </div>
          </div>

          {/* Deepshikha Rawat Contact */}
          <div className="relative w-full max-w-xs flex flex-col items-center">
            <p className="text-center text-gray-500 font-semibold mb-1">Deepshika Rawat</p>
            <div className="num flex items-center justify-center">
              <img
                src={contactCtaImage}
                alt="Contact CTA"
                className="w-44 h-auto object-cover"
                />
              <p className="absolute text-xs xl:text-sm">+91 639 879 3447</p>
            </div>
          </div>
        </div>
      </div>


     <div className="xl:w-1/4 flex flex-col items-center justify-center mt-4">
      <h3 className="text-xl font-semibold mb-2">Venue</h3>
      <div className="relative w-[280px] h-[200px] mt-2 flex items-center justify-center">
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
      <div className="border-t border-[#] w-[100vw] min-h-14 mr-[2rem] ml-[2rem] flex items-center justify-center">
        <div className="w-[95%] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className=""><BlinkingDot /></div>
          </div>
          <div>
            Made with ❤️ by Open Source Software Club
          </div>
          <div className="flex gap-[15px]">
            <img src={discord1} alt="Discord" />
            <img src={github} alt="GitHub" />
            <img src={meta} alt="Meta" />
            <img src={X_1} alt="X" />
            <img src={linkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Footer1;