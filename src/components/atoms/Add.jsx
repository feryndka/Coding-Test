import React from "react";
import { IoAdd } from "react-icons/io5";

const Add = ({...props}) => {
  return (
    <button {...props} className="hover:border border-2 border-[#A35709] w-[70px] h-[70px] rounded-lg flex items-center justify-center">
      <IoAdd className="text-5xl text-[#A35709]" />
    </button>
  );
};

export default Add;
