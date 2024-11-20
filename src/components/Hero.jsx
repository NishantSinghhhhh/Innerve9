import Navbar from "./Navbar";
import FlipCountdown from "./FlipCountdown";
import Button from "./Button";
import Devfolio from "../assets/devfolio.svg";
import Dates from "./Dates";

import Floating from "./Floating";
import Heading from "./Heading";

const Hero = () => {
  const handleEnd = () => {
    alert("Innerve 9 is now LIVE!!");
  };
  return (
    <section className="relative w-screen flex flex-col justify-center items-center gap-[120px]">
      <Navbar />
      <div className="w-full flex flex-col gap-24 justify-center items-center relative">
        <Heading />
        <FlipCountdown targetDate="2025-02-07T00:00:00" onEnd={handleEnd} />
        <Button BtnIcon={Devfolio} Label="APPLY WITH DEVFOLIO" />
      </div>
      <Dates />
      <Floating />
    </section>
  );
};

export default Hero;
