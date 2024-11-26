import React from 'react';
import Leaves from "../assets/Orange_Leaves.svg";
import Background from "../assets/Sponsors_Bg.svg";
import Background1 from "../assets/Bg1.svg";
import BgTexture from "../assets/Sponsors_Texture.svg";

const Sponsors = () => {
  return (
    <div className='w-[100%] '>
        <div className='w-auto'>
          <img src={Leaves} className=" "style={{ fill: 'rgba(254,94,3,255)' }} />
        </div>
        
        <div className='w-[100%] h-[400vh] bg-[#ff7603] relative'>

            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(254, 69, 0, 0.7), rgba(254, 69, 0, 0.7)), url(${Background})`, // Gradient + Background image
                opacity: 0.7, // Adjust if needed
            }}
            />

          {/* Second background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${BgTexture})`, // Second background image
              opacity: 0.5, // You can adjust the opacity here
            }}
          />
          
          <div className="relative z-10">
            {/* Content goes here */}
          </div>
        </div>

        <div>
        </div>
    </div>
  );
};

export default Sponsors;
