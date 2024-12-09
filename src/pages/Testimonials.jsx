import React from 'react';
import Piggy from "../assets/piggy.svg";
import TestimonialsCard from '../components/TestimonialsCard';


const data = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
      name: "Nishant Singh",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
      name: "Ananya Sharma",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta est suscipit a iste impedit fuga sed. Obcaecati amet fugiat ea quibusdam nulla sit incidunt dolorum totam nobis quae aperiam esse earum vitae dolor.",
      name: "Rahul Mehta",
    },
  ];
  
const Testimonials = () => {

  return (
    <div>
      <div className="relative font-angrybirds text-[80px] md:text-[128px] leading-[100%]">
        <img
          src={Piggy}
          alt="Piggy" 
          className="absolute w-[40px] md:w-[25px] top-[50%] left-[51.75%] rotate-[-6.39deg]"
        />
        Testimonials
      </div>

      <div className="pt-[4rem] flex flex-wrap gap-[2rem] justify-center">
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

