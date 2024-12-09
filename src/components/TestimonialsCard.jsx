import React from 'react';
import PinkGrid from "../assets/Pink_Grid.svg";
import Spark from "../assets/Spark.svg"

const TestimonialsCard = () => {
  return (
    <div
      className="w-[440px] h-[505px] relative p-[32px] pt-[96px]"
      style={{
        border: '3px solid #FF5BB1', // Border with solid pink color
        borderRadius: '12px', // Rounded corners for the border
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 91, 177, 0.1), rgba(98, 98, 98, 0.1))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
        //   backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.1), rgba(119, 119, 119, 0.1))',
          borderRadius: '10px', // Matches the rounded corners of the inner container
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
          zIndex: 1,
          pointerEvents: 'none', // Ensures no interaction with the image
        }}
      />

        <div className='flex  flex-col gap-[32px]'>
            <div>
                <img src={Spark} alt="" />
            </div>

            {/* content */}
            <div className='text-[20px] text-left'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed, obcaecati amet fugiat ea quibusdam nulla, sit incidunt dolorum totam nobis quae aperiam esse, earum vitae dolor. Ipsam unde veritatis beatae harum eveniet temporibus.
            </div>

            <div className='text-[24px] font-angrybirds text-left'>
                Nishant Singh
            </div>
        </div>
    </div>
    </div>
  );
};

export default TestimonialsCard;
