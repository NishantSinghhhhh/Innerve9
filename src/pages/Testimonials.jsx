import React from 'react'
import Piggy from "../assets/piggy.svg";
import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
  return (
    <div>
         <div className="relative font-angrybirds  text-[80px] md:text-[128px] leading-[100%]">
            <img
            src={Piggy}
            alt="Piggy"
            className="absolute w-5 md:w-10 top-[45%] left-[51%] rotate-[-6.39deg]"
          />
          Testimonials
          </div>

          <div>
            <TestimonialsCard/>
          </div>
    </div>
  )
}

export default Testimonials
