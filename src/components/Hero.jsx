import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
import Devfolio from "../assets/devfolio.svg"
import Dates from "./Dates";
import Piggy from "../assets/piggy.svg"

const Hero = () => {
  return (
    <section className="w-screen flex flex-col justify-center items-center gap-[120px]">
      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="font-angrybirds text-[80px] md:text-[172px] line leading-[100%]">INNERVE 9</p>
          <p className="font-angrybirds md:text-[32px]">
            INDIA&apos;S LARGEST STUDENT DRIVEN HACKATHON
          </p>
          <img src={Piggy} alt="piggy" className="hidden md:flex absolute md:top-[10%] md:left-[69.3%]" />
        </div>
        <FlipCountdown />
        <Button BtnIcon={Devfolio} Label="APPLY WITH DEVFOLIO"/>
      </div>
      <Dates />
    </section>
  );
};

export default Hero;
