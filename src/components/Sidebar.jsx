import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BackgroundImage from "../assets/background.svg";
import CrossIcon from "../assets/closeButton.svg";

const Sidebar = ({ closeSidebar }) => {
  const backgroundRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      { y: "-100vh", opacity: 0 },
      { y: "0", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { y: "50%", opacity: 0 },
      { y: "0", opacity: 1, duration: 0.5, ease: "power1.inOut", delay: 0.5, stagger: 0.2 }
    );
  }, []);

  const handleCloseSidebar = (event, targetId) => {
    event.preventDefault(); // Prevent the default anchor link navigation

    gsap.to(backgroundRef.current, {
      y: "-100vh",
      opacity: 0,
      duration: 1.0,
      ease: "power3.in",
    });

    gsap.to(itemsRef.current, {
      y: "50%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: 0.2,
      delay: 0.2,
    });

    // Close the sidebar after the animation
    setTimeout(() => {
      closeSidebar(); // Trigger the closeSidebar function
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); // Navigate to the target section
    }, 820);
  };

  return (
    <div
      ref={backgroundRef}
      className="absolute top-0 right-0 overflow-hidden h-screen w-screen flex justify-center items-center bg-cover bg-center z-50"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-8 z-20"
        onClick={handleCloseSidebar}
      >
        <img
          src={CrossIcon}
          alt="close"
          className="w-6 h-6 sm:w-8 sm:h-8 hover:opacity-75"
          style={{ backgroundColor: "transparent" }}
        />
      </button>

      {/* Menu Items */}
      <div className="font-angrybirds text-center space-y-6 z-10">
        {[
          { text: "PRIZES", id: "cards-section" },
          { text: "TRACKS", id: "tracks-section" },
          { text: "SPONSORED PROBLEM STATEMENTS", id: "sponsored-problem-statements-section" },
          { text: "TIMELINE", id: "timeline-section" },
          { text: "SPONSORS", id: "sponsors-section" },
          { text: "FAQS", id: "faqs-section" },
          { text: "TESTIMONIALS", id: "testimonials-section" },
        ].map((item, index) => (
          <a
            key={item.text}
            href={`#${item.id}`}
            onClick={(event) => handleCloseSidebar(event, item.id)} // Pass event and target ID to handleCloseSidebar
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold block no-underline"
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

