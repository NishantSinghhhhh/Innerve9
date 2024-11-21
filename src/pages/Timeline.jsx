import React from "react";
import Cloud from "../assets/Upper-Clouds.svg";
import Piggy from "../assets/piggy.svg";
import TimelineDetails from "../components/TimelineDetails";
import White from '../assets/White_Dot.svg';
import Black from '../assets/Dot.svg';
import Logo from '../assets/logo (1).svg'

const timelineData = [
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  {
    "title": "REGISTRATION STARTS",
    "date": "15 DEC 2025",
    "description": "The registration for the event begins. Make sure to sign up early to secure your spot."
  },
  
];


const Timeline = () => {
  return (
    <section className="overflow-hidden flex flex-col">
      {/* Cloud Image - Top */}
      <div className="relative top-[1rem] w-full">
        <img
          src={Cloud}
          alt="Cloud Background"
          className="w-full object-cover"
        />
      </div>

     {/* White Section */}
        <div className="bg-white min-h-[420vh] h-screen pt-[7rem] z-0">
          <div>
            <img
              src={Piggy}
              alt="Piggy"
              className="hidden md:flex absolute 2xl:left-[59rem] 2xl:top-[301rem]"
            />

            <p className="font-angrybirds text-black text-[4rem] xs:text-[6rem] sm:text-[6rem] md:text-[8rem] leading-[100%]">
              TIMELINE
            </p>
            <p className="font-angrybirds pt-[1rem] text-black xs:text-[1rem] sm:text-[1rem] md:text-[1.5rem] leading-[100%]">
              HERE&apos;S YOUR GUIDE TO INNERVE9
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row h-screen pt-[7rem]">
              {/* Left Division */}
              <div className="w-1/2 h-full"></div>

              {/* Right Division */}
              <div className="w-1/2 h-full flex flex-col gap-[18px]">
                <div className="text-black flex gap-[2rem] flex-row">
                  {/* Dots */}
                  <div className="flex flex-col gap-[1rem] justify-center items-center h-full">
                    <img
                      src={White}
                      className="w-[12px] h-[12px] invisible"
                      alt="White Dot"
                    />
                    <img
                      src={Black}
                      className="w-[40px] h-[40px]"
                      alt="Black Dot"
                    />
                    <img
                      src={White}
                      className="w-[12px] h-[12px]"
                      alt="White Dot"
                    />
                    <img
                      src={White}
                      className="w-[12px] h-[12px]"
                      alt="White Dot"
                    />
                    <img
                      src={White}
                      className="w-[12px] h-[12px]"
                      alt="White Dot"
                    />
                  </div>

                  {/* Details */}
                  <div className="w-[70%]">
                    <div className="flex flex-row justify-between">
                      <p className="font-angrybirds text-[20px]">
                        REGISTRATION STARTS
                      </p>
                      <p className="font-tthoves text-[14px] text-gray-500">
                        15 DEC 2025
                      </p>
                    </div>
                    <div className="font-tthoves text-left text-[16px] pt-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                      nesciunt sunt dolore voluptates voluptatem cum quaerat sit est
                      atque fuga.
                    </div>
                  </div>
                </div>

                {timelineData.map((event, index) => (
                  <TimelineDetails
                    key={index}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                  />
                ))}

                <div className="text-black flex gap-[2rem] flex-row">
                  {/* Dots */}
                  <div className="flex flex-col gap-[1rem] justify-center items-center h-full">
                    <img
                      src={White}
                      className="w-[12px] h-[12px]"
                      alt="White Dot"
                    />
                    <img
                      src={Black}
                      className="w-[40px] h-[40px]"
                      alt="Black Dot"
                    />
                  </div>

                  {/* Details */}
                  <div className="w-[70%]">
                    <div className="flex flex-row justify-between">
                      <p className="font-angrybirds text-[20px]">
                        REGISTRATION STARTS
                      </p>
                      <p className="font-tthoves text-[14px] text-gray-500">
                        15 DEC 2025
                      </p>
                    </div>
                    <div className="font-tthoves text-left text-[16px] pt-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                      nesciunt sunt dolore voluptates voluptatem cum quaerat sit est
                      atque fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section - Separate from the main white section */}
        <div className=" bg-white pb-[5rem] flex justify-center items-center">
          <img src={Logo} alt="Logo" />
        </div>

      
      {/* Cloud Image - Bottom */}
      <div className="relative bottom-[50px] w-full">
        <img
          src={Cloud}
          alt="Cloud Background"
          className="w-full object-cover transform rotate-180"
        />
      </div>
    </section>
  );
};

export default Timeline;
