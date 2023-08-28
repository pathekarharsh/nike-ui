import React from "react";

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full text-white border-coral-red bg-coral-red">
      {label}
      {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
