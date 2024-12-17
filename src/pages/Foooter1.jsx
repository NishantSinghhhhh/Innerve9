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
import RotatingRoth from "../components/Rotating_roth.jsx";

const Footer1 = () => {
  return (
    <>
      <div className="w-[100%] h-[58rem] md:h-[25rem] lg:h-[35rem] xl:h-[35rem] overflow-hidden">
        <div className="flex md:flex-row justify-between mb-[1.5rem] flex-col">

          <div className="">
            <RotatingRoth />
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
        <div className="border-t border-[#9CA3AF] pt-[10px] w-full min-h-14 
        flex flex-col 
        md:flex-row 
        md:items-center 
        md:justify-center">
          <div className="w-[95%] 
            flex flex-col 
            md:flex-row 
            items-center 
            justify-between 
            space-y-4 
            md:space-y-0">
            <div className="flex items-center gap-[10px]">
              <BlinkingDot />
            </div>

            <div className="text-[#9CA3AF] text-[15px] md:text-[18px] text-center">
              Made with ❤ by Open Source Software Club
            </div>

            <div className="flex gap-[15px]">
              {/* Links for social media icons */}
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src={discord1} alt="Discord" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
              <a href="hthttps://www.instagram.com/innerve.tech/tps://www.meta.com" target="_blank" rel="noopener noreferrer">
                <img src={meta} alt="Meta" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
              <a href="https://x.com/innerve_tech" target="_blank" rel="noopener noreferrer">
                <img src={X_1} alt="X" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
              <a href="https://whttps://www.linkedin.com/company/open-source-software-club/posts/?feedView=allww.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="LinkedIn" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;