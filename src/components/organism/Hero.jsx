import React from "react";
import PostData from "../moleculs/PostData";
import Data from "../moleculs/Data";

const Hero = () => {
  return (
    <div className="h-screen w-full flex md:items-center justify-center">
      <div className="md:h-[80%] md:w-[90%] pt-10 md:pt-0">
        <PostData />
        <Data />
      </div>
    </div>
  );
};

export default Hero;
