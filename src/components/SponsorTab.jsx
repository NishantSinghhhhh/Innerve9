import React from 'react';
import PropTypes from 'prop-types';

const SponsorTab = ({ heading, images, piggyNumber }) => {
  return (
    <div className="w-full mb-[7.23rem]">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h3 className="text-[2rem] md:text-[2.5rem] font-angrybirds text-[#FFFF5C] mb-6 md:mb-8 ">
          {heading}
        </h3>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative md:w-[23rem] w-[14rem] h-[5.25rem] border-8 border-[#734F1F] transform -skew-x-12 flex items-center justify-center"
            >
              <div className="flex items-center justify-center bg-white border-4 border-[#FFC102] transform -skew-x-10 h-full w-full">
                <div className="flex items-center justify-center w-[80%] h-[50%] transform skew-x-12">
                  {image} {/* The image appears straight */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SponsorTab.propTypes = {
  heading: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  piggyNumber: PropTypes.number.isRequired,
};

export default SponsorTab;
