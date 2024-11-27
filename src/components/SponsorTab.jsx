import React from 'react';
import SponsorBox from './SponsorBox';
import PiggySponsorBox from './PiggySponsorBox';

const SponsorTab = ({ heading, images, piggyNumber }) => {
  return (
    <div className='pb-[5rem]'>
      <p className="font-angrybirds text-[36px] text-[#FFFF5C] pb-[3rem]">{heading}</p>
      <div className="flex-wrap gap-[4rem] mt-4 flex flex-row items-center justify-center ">
        {images.map((image, index) => (
          index === piggyNumber ? (
            <PiggySponsorBox key={index} image={image}/>  // Render PiggySponsorBox if index matches piggyNumber
          ) : (
            <SponsorBox key={index} image={image} />  // Otherwise render SponsorBox with the image
          )
        ))}
      </div>
    </div>
  );
};

export default SponsorTab;
