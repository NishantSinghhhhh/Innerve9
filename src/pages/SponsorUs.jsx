import React, { useState, useEffect } from 'react';

import cactus from "../assets/cactus.svg";
import Rocks from "../assets/ROCKS.svg";
import Texture from "../assets/Texture_Sponsor_Us.svg";
import Wooden from "../assets/wooden _block.svg";
import Wooden_mobile from "../assets/wooden_mobile.svg";
import ButtonSponsor from '../components/ButtonSponsor';

const SponsorUs = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Effect to update isMobile when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSponsorUsClick = () => {
       window.location.href = "/sponsor-us"; 
     };
  const handleGetBrochureClick = () => {
       window.open("https://drive.google.com/file/d/your-file-id/view?usp=sharing", "_blank"); 
     };

  // Select background image based on screen size
  const backgroundImage = isMobile ? Wooden_mobile : Wooden;

  return (
    <div>
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
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Content Inside Wooden */}
          <div className="flex flex-col items-center justify-center gap-[1rem] md:px-[2rem] text-center">
            <div className="w-full">
              <div className="text-left">
                <p className="text-white font-angrybirds text-[1rem] md:text-[2.75rem] ml-[1rem] xl:text-[3rem]">
                  WANT TO
                </p>
              </div>

              <div>
                <p className="text-white font-angrybirds text-[1.5rem] md:text-[6rem] xl:text-[8rem]">
                  SPONSOR US!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[3rem]">
              <ButtonSponsor Label="SPONSOR US" onClick={handleSponsorUsClick}/>
              <ButtonSponsor Label="GET BROCHURE" onClick={handleGetBrochureClick}/>
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

// import React, { useState, useEffect } from 'react';
// // import { useHistory } from 'react-router-dom';

// import cactus from "../assets/cactus.svg";
// import Rocks from "../assets/ROCKS.svg";
// import Texture from "../assets/Texture_Sponsor_Us.svg";
// import Wooden from "../assets/wooden _block.svg";
// import Wooden_mobile from "../assets/wooden_mobile.svg";
// import ButtonSponsor from '../components/ButtonSponsor';

// const SponsorUs = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const backgroundImage = isMobile ? Wooden_mobile : Wooden;

//   // const history = useHistory();

//   const handleSponsorUsClick = () => {
//     window.location.href = "/sponsor-us"; 
//   };

//   const handleGetBrochureClick = () => {
//     window.open("https://drive.google.com/file/d/your-file-id/view?usp=sharing", "_blank"); 
//   };

//   return (
//     <div>
//       <div className="relative mb-[20px] scale-[2.5] md:scale-[1.5] lg:scale-[1] md:-mb-[20px] z-5">
//         <img src={cactus} alt="Cactus" />
//       </div>

//       <div
//         className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
//         style={{
//           background: "linear-gradient(to bottom, #E1A158, #986A36)",
//         }}
//       >
//         <div className="absolute inset-0 z-5">
//           <img
//             src={Texture}
//             alt="Texture"
//             className="w-full h-full object-cover mix-blend-soft-light"
//           />
//         </div>

//         <div
//           className="z-10 flex items-center justify-center w-[100%] md:w-[80%] lg:w-[70%] h-[50vh] md:h-[60vh] lg:h-[70vh] bg-no-repeat bg-center bg-contain"
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//           }}
//         >
//           <div className="flex flex-col items-center justify-center gap-[2rem] md:px-[2rem] text-center">
//             <div className="w-full">
//               <div className="text-left">
//                 <p className="text-white font-angrybirds text-[1rem] md:text-[3rem] ml-[1rem]">
//                   WANT TO
//                 </p>
//               </div>

//               <div>
//                 <p className="text-white font-angrybirds text-[2rem] md:text-[8rem]">
//                   SPONSOR US!
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[3rem]">
//               <ButtonSponsor Label="SPONSOR US" onClick={handleSponsorUsClick} />
//               <ButtonSponsor Label="GET BROCHURE" onClick={handleGetBrochureClick} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative -mt-[15px] scale-[2] md:scale-[1.5] lg:scale-[1] md:-mt-[50px] lg:-mt-[100px] z-5">
//         <img src={Rocks} alt="Rocks" />
//       </div>
//     </div>
//   );
// };

// export default SponsorUs;