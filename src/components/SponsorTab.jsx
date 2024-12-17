import React from 'react';
import PropTypes from 'prop-types';

const SponsorTab = ({ heading, images, piggyNumber }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl md:text-4xl font-angrybirds text-white mb-6 md:mb-8">
          {heading}
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {images.map((Image, index) => (
            <div 
              key={index} 
              className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl flex items-center justify-center p-4"
            >
              {Image}
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