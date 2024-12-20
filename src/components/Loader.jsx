import React from 'react';
import { useEffect } from 'react';

const Loader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-white flex flex-col items-center justify-center gap-6">
   
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-8 border-[#e34a65] border-r-transparent border-l-transparent animate-spin" />
        
        <div className="absolute inset-4 rounded-full bg-[#e34a65] animate-pulse" />
        
        <div className="absolute inset-[14px] rounded-full bg-[#e34a65] animate-ping" />
      </div>
      
      <div className="relative">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#e34a65] via-[#e34a65] to-[#e34a65] bg-clip-text text-transparent animate-pulse">
          Loading...
        </div>
      </div>
      <div className="w-48 h-1 bg-[#e34a65] rounded-full overflow-hidden">
        <div className="h-full bg-[#e34a65] rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

// Add keyframes for loading animation
const style = document.createElement('style');
style.textContent = `
  @keyframes loading {
    0% { width: 0%; }
    50% { width: 100%; }
    100% { width: 0%; }
  }
`;
document.head.appendChild(style);

export default Loader;