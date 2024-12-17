import React from "react";
import Piggy from "../assets/piggy.svg";
import TestimonialsCard from "../components/TestimonialsCard";

const data = [
  {
    content:
      "Innerve provided a platform to innovate and challenge myself. I got to meet talented people, work on groundbreaking ideas, and see how different minds approach solving the same problem. The energy and learning were unparalleled. Highly recommend it!",
    name: "Priya Verma, Data Scientist",
  },
  {
    content:
      "Innerve 8 was an incredible experience! The challenges were both exciting and tough, pushing me to think creatively and outside the box. The collaborative atmosphere made problem-solving even more rewarding, and I’ve learned a ton from my teammates. Can't wait for the next one!",
    name: "Anjali Gupta, Developer",
  },
  {
    content:
      "Participating in Innerve 8 was a game-changer for me. The hackathon not only helped me refine my coding skills but also gave me the chance to work on real-world projects with passionate developers. The support from mentors was amazing, and the whole event was incredibly well-organized!",
    name: "Jaskirat Singh, UI/UX designer",
  },
];

const Testimonials = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="relative font-angrybirds text-[64px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] leading-[100%] mb-12 md:mb-16 text-center">
      <img
        src={Piggy}
        alt="Piggy"
        className="absolute w-[20px] h-[20px] sm:w-[15px] md:w-[20px] lg:w-[25px] top-[65%] left-[54%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-6.39deg] xl:top-[65%] xl:left-[52%] xl:h-[30px] xl:w-[30px] lg:top-[65%] lg:left-[40%]"
      />
        Testimonials
      </div>
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