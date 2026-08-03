import React from "react";
import { HiArrowRight } from "react-icons/hi";

type CustomButtonProps = {
  buttontext: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ buttontext }) => {
  return (
    <span
      className="
        group
        flex items-center
        gap-2
        px-4 py-1.5
        rounded-md
        bg-gray-700 text-white text-sm
        transition-all duration-300
        hover:bg-gray-600
      "
    >
      <span>{buttontext}</span>

      <span
        className="
          flex items-center justify-center
          w-5 h-5
          rounded-full
          bg-white
          transition-transform duration-300
          group-hover:translate-x-1
        "
      >
        <HiArrowRight className="w-3.5 h-3.5 text-gray-700" />
      </span>
    </span>
  );
};

export default CustomButton;
