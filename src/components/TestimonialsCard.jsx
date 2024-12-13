// import React from 'react';
// import PinkGrid from "../assets/Pink_Grid.svg";
// import Spark from "../assets/Spark.svg";
// import { blur } from 'three/webgpu';

// const TestimonialsCard = ({ content, name }) => {
//   return (
//     <div
//       className="w-[440px] h-[505px] flex items-center justify-center "
//       style={{
//         position: 'relative',
//         borderRadius: '12px', // Rounded corners
//         backgroundImage: 'linear-gradient(to bottom, #FF5BB1, #626262', // Gradient background
//         backgroundOrigin: 'border-box',
//         backgroundClip: 'border-box', // Makes the gradient visible only on the border
//         backdropFilter: 'blur(100px)', 

//       }}
//     >
//       <div
//         className="flex items-center justify-center p-[2rem]"
//         style={{
//           borderRadius: '12px', // Adjusted for inner content
//           backgroundColor: '#14021e', // Background color for inner content
//           width: '98.5%', // Makes the inner div almost fill the outer container
//           height: '98.5%', // Makes the inner div almost fill the outer container
//           backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.2) 40%, rgba(119, 119, 119, 0.3) 100%)',
//         }}
//       >
//          <img
         
//           src={PinkGrid}
//           alt="Pink Grid"
//           style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               objectFit: 'cover',
//               width: '100%',
//               height: '100%',
//               // zIndex: 1,
//               borderRadius: '12px',
//             pointerEvents: 'none', // Ensures no interaction with the image
//           }}
//         />

//         <div className="flex flex-col gap-[32px] relative z-10">
//           {/* Spark logo */}
//           <div>
//             <img src={Spark} alt="Spark" />
//           </div>

//           {/* Content */}
//           <div className="text-[20px] text-left text-white">
//             {content}
//           </div>

//           {/* Name */}
//           <div className="text-[24px] font-angrybirds text-left text-white">
//             {name}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsCard;


import React from 'react';
import PinkGrid from "../assets/Pink_Grid.svg";
import Spark from "../assets/Spark.svg";

const TestimonialsCard = ({ content, name }) => {
  return (
    <div 
      className="w-full max-w-[440px] h-auto min-h-[505px] flex items-center justify-center mx-auto px-4 py-6 relative"
      style={{
        borderRadius: '12px',
        background: 'linear-gradient(to bottom, #FF5BB1, #626262)',
        padding: '2px', // Slim border width
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full"
        style={{
          borderRadius: '10px', // Slightly smaller to account for 2px border
          backgroundColor: '#14021e',
          backgroundImage: 'linear-gradient(to bottom, rgba(179, 121, 27, 0.2) 40%, rgba(119, 119, 119, 0.3) 100%)',
        }}
      >
        <img
          src={PinkGrid}
          alt="Pink Grid"
          className="absolute inset-0 w-full h-full object-cover rounded-[10px] pointer-events-none"
        />
        
        <div className="flex flex-col gap-6 sm:gap-[32px] relative z-10 w-full p-4 sm:p-[2rem]">
          {/* Spark logo */}
          <div className="w-full">
            <img 
              src={Spark} 
              alt="Spark" 
              className="max-w-[100px] sm:max-w-none"
            />
          </div>
          
          {/* Content */}
          <div className="text-base sm:text-[20px] text-left text-white">
            {content}
          </div>
          
          {/* Name */}
          <div className="text-xl sm:text-[24px] font-angrybirds text-left text-white">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;