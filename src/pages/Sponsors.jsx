import React from 'react'
import Accops from "../assets/Accops.svg";
import Devfolio from "../assets/devfolio.svg"
import EthIndia from "../assets/ETHIndia.png"
import Polygom from "../assets/Polygon.png"
import UpperLeaves from "../assets/Orange_Leaves_1.png";
import LowerLeaves from "../assets/Orange_Leaves_bottom.png";
import Texture from "../assets/texture.svg";
import SponsorTab from '../components/SponsorTab';

const Sponsors = () => {
  const titleSponsorImages = [Polygom, Devfolio, EthIndia];
  const goldSponsorImages = [Accops, Accops, Accops];
  const silverSponsorImages = [Accops, Accops, Accops];

  return (
    <section className="relative w-full flex flex-col justify-center items-center">
      {/* upper leaves */}
      <div className="w-[120vw] -mb-10 md:-mb-64">
        <img
          src={UpperLeaves}
          alt="leaves"
          className="w-full object-cover"
        />
      </div>

      {/* sponsor */}
      <div className='flex flex-col justify-center items-center relative py-24 bg-[#FE7702] w-full' >
      <div className='absolute w-full h-full top-0 left-0' style={{backgroundImage: `url(${Texture})`, backgroundPosition:"top", backgroundRepeat:"repeat", backgroundSize:"100%", mixBlendMode:"soft-light", opacity:0.8}} ></div>
        {/* heading */}
        <div className='flex flex-col md:flex-row gap-0'>
          <p className='capitalize text-[32px] md:text-7xl font-angrybirds text-[#FFFF5C] leading-none'>Our</p>
          <p className='capitalize text-[80px] md:text-[128px] font-angrybirds text-[#FFFF5C] leading-none'>Sponsors</p>
        </div>

        {/* sponsors tab */}
        <div className='px-6'>
            <SponsorTab heading="Title Sponsor" images={titleSponsorImages}  piggyNumber={0}/>
            <SponsorTab heading="Gold Sponsors" images={goldSponsorImages} piggyNumber={1}/>
            <SponsorTab heading="Silver Sponsors" images={silverSponsorImages}  piggyNumber={2}/>
            <SponsorTab heading="Title Sponsor" images={silverSponsorImages}  piggyNumber={0}/>
            <SponsorTab heading="Gold Sponsors" images={goldSponsorImages} piggyNumber={1}/>
            <SponsorTab heading="Silver Sponsors" images={silverSponsorImages} piggyNumber={2}/>
        </div>
      </div>

      {/* upper leaves */}
      <div className="w-[120vw] -mt-10 md:-mt-64" >
        <img
          src={LowerLeaves}
          alt="leaves"
          className="w-full object-cover"
        />
      </div>
    </section>
  )
}

export default Sponsors
