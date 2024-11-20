import BubblePiggy from "../assets/bubble-piggy.svg";
import "../index.css"

const Floating = () => {
  return (
    <div className="-z-10 absolute left-[0%] bottom-[-38%]  w-screen">
      <img
        id="floating-piggy"
        // ref={bubbleRef}
        src={BubblePiggy}
        alt="Bubble Piggy"
      />
    </div>
  );
};

export default Floating;
