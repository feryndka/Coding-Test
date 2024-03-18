import React from "react";
import { IoClose } from "react-icons/io5";

const Delete = ({...props}) => {
  return (
    <button {...props} className="h-[32px] w-[32px] hover:border border-2 border-[#A35709] rounded-lg flex justify-center items-center text-[#A35709]">
      <IoClose />
    </button>
  );
};

export default Delete;
