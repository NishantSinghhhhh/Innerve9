import Piggy from "../assets/piggy.svg"
import KingPiggy from "../assets/kingpiggy.svg"

const Dates = () => {
  return (
    <div className="relative flex justify-center items-center gap-[32px] md:gap-[60px] font-angrybirds">
      <div>
        <p className="text-[80px] md:text-[128px]">07</p>
        <p className="text-[20px] md:text-5xl">FEB 2025</p>
      </div>
      <div className="text-[80px] md:text-[128px]">-</div>
      <div>
        <p className="text-[80px] md:text-[128px]">08</p>
        <p className="text-[20px] md:text-5xl">FEB 2025</p>
      </div>
      <img src={Piggy} alt="piggy" className="hidden md:flex absolute top-[5%] left-[20%] rotate-[-7deg]"/>
      <img src={KingPiggy} alt="kingpiggy" className="hidden md:flex absolute top-[45%] left-[87.5%]"/>
    </div>
  );
};

export default Dates;
