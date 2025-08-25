import button_1 from "../../../../assets/images/properties/button_1.svg";
import button_2 from "../../../../assets/images/properties/button_2.svg";

interface ToggleButtonProps {
  buttonVisible: "button1" | "button2";
  onExpand: () => void;
  onCollapse: () => void;
}

export const ToggleButton = ({ buttonVisible, onExpand, onCollapse }: ToggleButtonProps) => (
  <div className="flex justify-center my-8 min-h-[60px]">
    {buttonVisible === "button1" ? (
      <img
        src={button_1}
        alt="Show more"
        className="cursor-pointer w-[60px] h-[60px] hover:scale-105 transition-transform"
        onClick={onExpand}
      />
    ) : (
      <img
        src={button_2}
        alt="Show less"
        className="cursor-pointer w-[60px] h-[60px] hover:scale-105 transition-transform"
        onClick={onCollapse}
      />
    )}
  </div>
);
