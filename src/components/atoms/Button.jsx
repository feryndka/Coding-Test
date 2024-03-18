import React from "react";

const Button = ({ action, ...props }) => {
  return (
    <button
      {...props}
      className="w-[64px] h-[30px] text-center border border-[#A35709] rounded-lg text-sm hover:border-2"
    >
      {action}
    </button>
  );
};

export default Button;
