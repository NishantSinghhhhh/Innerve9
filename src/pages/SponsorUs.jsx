import React from 'react'; 
import cactus from "../assets/cactus.svg"; 
import Rocks from "../assets/ROCKS.svg"; 
import Texture from "../assets/Texture_Sponsor_Us.svg"; 
import Wooden from "../assets/wooden _block.svg"; 
import Button from '../components/Button';  
import ButtonSponsor from '../components/ButtonSponsor';

const SponsorUs = () => {   
  return (     
    <div className="">
      {/* Cactus Image */}
      <div className="relative mb-[20px] scale-[2.5] md:scale-[1.5] lg:scale-[1] md:-mb-[20px] z-5">
        <img src={cactus} alt="Cactus" />
      </div>
      
      {/* Middle Section */}
      <div
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #E1A158, #986A36)",
        }}
      >
        {/* Texture Image - Below Wooden */}
        <div className="absolute inset-0 z-5">
          <img
            src={Texture}
            alt="Texture"
            className="w-full h-full object-cover mix-blend-soft-light"
          />
        </div>
        
        {/* Wooden Section with Background Image */}
        <div
          className="z-10 flex items-center justify-center w-[100%] md:w-[%] lg:w-[70%] h-[50vh] md:h-[60vh] lg:h-[70vh] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${Wooden})`,
          }}
        >
          {/* Content Inside Wooden */}
          <div className="flex flex-col items-center justify-center gap-[2rem] md:px-[2rem] text-center">
            <div className="w-full">
              <div className='text-left'>
                <p className="text-white font-angrybirds text-[1rem] md:text-[3rem] ml-[1rem]">
                  WANT TO
                </p>
              </div>
              
              <div>
                <p className="text-white font-angrybirds text-[2rem] md:text-[8rem]">
                  SPONSOR US!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col  md:flex-row gap-[1rem] md:gap-[3rem]">
              <ButtonSponsor Label ="SPONSOR US" />
              <ButtonSponsor Label="GET BROCHURE"  />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative -mt-[15px] scale-[2] md:scale-[1.5] lg:scale-[1] md:-mt-[50px] lg:-mt-[100px] z-5">
        <img src={Rocks} alt="Rocks" />
      </div>
    </div>
  ); 
};  

export default SponsorUs;