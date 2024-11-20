import btn from "../assets/btn.svg";
import Warning from "../assets/warning-graphic.svg";

const Button = ({ BtnIcon, Label }) => {
  return (
    <button
      className="flex items-center justify-center gap-[10px] px-8 py-4 text-white relative"
      style={{
        backgroundImage: `url(${btn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        backgroundPosition: "center",
      }}
    >
      {BtnIcon && <img src={BtnIcon} alt="icon" />}
      {Label && <span className=" md:text-[32px] font-angrybirds">{Label}</span>}
      <img src={Warning} alt="warning" className="absolute top-[-25%] left-[-8%] md:left-[-3%]"/>
    </button>
  );
};

export default Button;
