import React from 'react';
import PinkGrid from "../assets/Pink_Grid.svg";
import Spark from "../assets/Spark.svg";

const TestimonialsCard = ({ content, name }) => {
  return (
    <div
      className="w-[440px] h-[505px] relative p-[32px] pt-[96px]"
      style={{
        border: '3px solid #FF5BB1', // Border with solid pink color
        borderRadius: '12px', // Rounded corners for the border
        backgroundOrigin: 'border-box',
        backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.2) 40%, rgba(119, 119, 119, 0.3) 100%)',
        backgroundClip: 'padding-box',
    }}
    >
      <div
       style={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',

      }}
      
        >
        <img
          src={PinkGrid}
          alt="Pink Grid"
          style={{
              position: 'absolute',
              top: 0,
              left: 0,
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              // zIndex: 1,
              backdropFilter: 'blur(100px)',
              border: '3px ', 
              borderRadius: '12px',
            pointerEvents: 'none', // Ensures no interaction with the image
          }}
        />

        <div className="flex flex-col gap-[32px] relative z-10">
          {/* Spark logo */}
          <div>
            <img src={Spark} alt="Spark" />
          </div>

          {/* Content */}
          <div className="text-[20px] text-left text-white">
            {content}
          </div>

          {/* Name */}
          <div className="text-[24px] font-angrybirds text-left text-white">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
