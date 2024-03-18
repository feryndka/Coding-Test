import React from "react";

const Input = ({ placeholder, ...props }) => {
  return (
    <input {...props} type="text" placeholder={placeholder} className="bg-[#242320] w-[267px] h-[32px] border border-[#A35709] rounded-sm ps-3" />
  );
};

export default Input;
