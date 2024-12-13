// import React from 'react';
// import Piggy from "../assets/piggy.svg";
// import TestimonialsCard from '../components/TestimonialsCard';

// const data = [
//     {
//       content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
//       name: "Nishant Singh",
//     },
//     {
//       content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
//       name: "Ananya Sharma",
//     },
//     {
//       content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
//       name: "Rahul Mehta",
//     },
//   ];

// const Testimonials = () => {

//   return (
//     <div>
//       <div className="relative font-angrybirds text-[80px] md:text-[128px] leading-[100%] mb-[4rem]">
//         <img
//           src={Piggy}
//           alt="Piggy"
//           className="absolute w-[40px] md:w-[25px] top-[50%] left-[51.75%] rotate-[-6.39deg]"
//         />
//         Testimonials
//       </div>

//       <div className="pt-[4rem] flex flex-wrap gap-[5rem] justify-center">
//         {data.map((testimonial, index) => (
//           <TestimonialsCard
//             key={index}
//             content={testimonial.content}
//             name={testimonial.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import Piggy from "../assets/piggy.svg";
import TestimonialsCard from "../components/TestimonialsCard";

const data = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
    name: "Nishant Singh",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
    name: "Ananya Sharma",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
    name: "Rahul Mehta",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="relative font-angrybirds text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] leading-[100%] mb-12 md:mb-16 text-center">
        <img
          src={Piggy}
          alt="Piggy"
          className="absolute w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-6.39deg]"
        />
        Testimonials
      </div>

      {/* Cards Section */}
      <div className="pt-8 md:pt-12 flex flex-wrap gap-8 md:gap-12 justify-center">
        {data.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            content={testimonial.content}
            name={testimonial.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
