import React from "react";
import Cloud from "../assets/Upper-Clouds.svg";
import Piggy from "../assets/piggy.svg";
import TimelineDetails from "../components/TimelineDetails";
import Logo from "../assets/logo (1).svg";
import Black from "../assets/Dot.svg";
import LogoAnimation from "../components/LogoAnimation";
import White_Leaves from "../assets/White_Leaves_1.svg";

const timelineData = [
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
  {
    title: "REGISTRATION STARTS",
    date: "15 DEC 2025",
    description:
      "The registration for the event begins. Make sure to sign up early to secure your spot.",
  },
];

const Timeline = () => {
  return (
    <section>
      {/* Cloud Image - Top */}
      <div className="relative top-[10px] w-full">
        <img
          src={Cloud}
          alt="Cloud Background"
          className="w-full object-cover"
        />
      </div>

      {/* White Section */}
      <div className="bg-white py-36 flex flex-col gap-[108px]">
        <div className="relative flex flex-col items-center justify-center gap-5">
          <div className="relative font-angrybirds text-black text-[80px] md:text-[128px] leading-[100%]">
            TIMELINE
            <img
            src={Piggy}
            alt="Piggy"
            className="absolute w-6 md:w-10 top-[-20%] left-[90%] rotate-[-6.39deg]"
          />
          </div>
          <p className="font-angrybirds text-black text-[20px] md:text-[32px] leading-[100%] uppercase">
            HERE&apos;S YOUR GUIDE TO INNERVE9
          </p>
          
        </div>

        {/* timeline main*/}
        <div className="flex flex-col items-center justify-center gap-24 md:gap-64">
          {/* timeline data and innerve logo formation */}
          <div className="w-[100%] flex justify-center items-center gap-auto">
            {/* left div */}
            <div className="hidden md:flex w-[48%] justify-center items-center relative">
              <LogoAnimation />
            </div>

            {/* Right Division// timeline data */}
            <div className="flex px-4 flex-col justify-center items-center gap-[18px]">
              <div className="flex flex-col items-start justify-start gap-[18px]">
                {timelineData.map((event, index) => (
                  <TimelineDetails
                    key={index}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                  />
                ))}
              </div>
              <div className="text-black flex gap-6 md:gap-[44px]">
                {/* Dots */}
                <img
                  src={Black}
                  className="w-[40px] h-[40px]"
                  alt="Black Dot"
                />

                {/* Details */}
                <div className="w-[80%]">
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-angrybirds text-base md:text-[20px]">
                      REGISTRATION STARTS
                    </p>
                    <p className="font-tthoves text-[14px] text-gray-500">
                      15 DEC 2025
                    </p>
                  </div>
                  <div className="font-tthoves text-left text-sm md:text-base pt-[1rem]">
                    The registration for the event begins. Make sure to sign up
                    early to secure your spot.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Section - Separate from the main white section */}
          <div className=" bg-white w-32 md:w-[240px] z-10">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>

      {/* Cloud Image - Bottom */}
      <div className="relative lg:bottom-[13rem] md:bottom-[8rem] sm:bottom-[5rem] bottom-[4rem] w-full z-1">
      <img
        src={White_Leaves}
        alt="Cloud Background"
        className="w-full object-cover transform"
      />
    </div>

    </section>
  );
};

export default Timeline;
