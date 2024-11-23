import React from "react";
import Logo from "../assets/logo.svg";
import Navigate from "../assets/link.svg";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-4 px-8 lg:py-8 lg:px-[120px]">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 cursor-pointer px-4 group">
            <span className="h-[20px] w-1 bg-[#3AFFA3] z-10"></span>
            <span
              className="h-3 w-1 bg-[#3AFFA3] absolute -translate-x-1/2"
              style={{
                animation: "growBlur 500ms infinite",
                opacity: 1,
              }}
            ></span>
            <p>Brochure</p>
            <img src={Navigate} alt="brochure" />
          </div>
          <button className="flex items-center gap-[10px] border border-[rgba(255,255,255,0.5)] pl-6 pr-4 py-[10px] rounded">
            <p>Menu</p>
            <img src={Navigate} alt="menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
