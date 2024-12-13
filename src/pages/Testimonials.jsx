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
      <div className="relative font-angrybirds text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] leading-[100%] mb-12 md:mb-16 text-center">
        <img
          src={Piggy}
          alt="Piggy"
          className="absolute w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-[-6.39deg]"
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
