import React from 'react';
import SponsorBox from './SponsorBox';
import PiggySponsorBox from './PiggySponsorBox';

const SponsorTab = ({ heading, images, piggyNumber }) => {
  const sponsorBoxes = images.map((image, index) => {
    if (index === piggyNumber) {
      return <PiggySponsorBox key={index} image={image} />;
    }
    return <SponsorBox key={index} image={image} />;
  });

  return (
    <div className="pb-[5rem]">
      <p className="font-angrybirds text-[36px] text-[#FFFF5C] pb-[3rem]">{heading}</p>
      <div className="flex-wrap gap-[4rem] mt-4 flex flex-row items-center justify-center">
        {sponsorBoxes}
      </div>
    </div>
  );
};

export default SponsorTab;
