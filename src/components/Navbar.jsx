import React, { lazy, Suspense } from "react";
import Navigate from "../assets/link.svg";


const Logo = lazy(() => import('../assets/logo.svg?react'));

const Navbar = () => {
  const handleBrochureClick = () => {
    window.open("https://drive.google.com/file/d/your-file-id/view?usp=sharing", "_blank");
  };

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-4 px-8 lg:py-8 lg:px-[120px]">

        <Suspense fallback={<div>Loading...</div>}>
          <a href="/">
            <Logo className="h-8 w-auto" alt="logo" />
          </a>
        </Suspense>
        
        <div className="flex gap-4 items-center">
          <div
            className="flex items-center gap-2 cursor-pointer px-4 group"
            onClick={handleBrochureClick}
          >
            <span className="h-[20px] w-1 bg-[#3AFFA3] z-10"></span>
            <span
              className="h-4 w-1 bg-[#3AFFA3] absolute -translate-x-1/2"
              style={{
                animation: "growBlur 500ms infinite",
                opacity: 1,
              }}
            ></span>
            <p>Brochure</p>
            <img
              src={Navigate}
              alt="brochure"
              className="group-hover:rotate-[45deg] transition duration-500"
            />
          </div>
          <button className="flex items-center gap-[10px] border border-[rgba(255,255,255,0.5)] pl-6 pr-4 py-[10px] rounded group">
            <p>Menu</p>
            <img
              src={Navigate}
              alt="menu"
              className="group-hover:rotate-[45deg] transition duration-500"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
