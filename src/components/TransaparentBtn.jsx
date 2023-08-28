import React from "react";

const TransaparentBtn = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full text-slate-gray border-slate-gray border-2 bg-white">
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default TransaparentBtn;
