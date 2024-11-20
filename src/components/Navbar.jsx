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
          <div className="flex items-center gap-2 cursor-pointer px-4">
            <div className="bg-[#3AFFA3] h-[20px] w-1 shadow-[0_0_36px_8px_rgba(58,255,163,0.5)]"></div>
            <p>Brochure</p>
            <img src={Navigate} alt="brochure" />
          </div>
          <button className="flex items-center gap-[10px] border border-[rgba(255,255,255,0.5)] pl-6 pr-4 py-[10px] rounded">
            <p>Merit</p>
            <img src={Navigate} alt="merit" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
