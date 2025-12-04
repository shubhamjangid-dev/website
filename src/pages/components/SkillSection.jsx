import React from "react";
import { TechSlide } from "./TechSlide";

function SkillSection() {
  return (
    <div className="w-full bg-white  flex flex-col pb-16">
      <div className="max-w-screen-xl text-lg text-left px-12 sm:px-16 md:px-20 lg:px-36  pt-12 sm:pt-16 md:pt-20 lg:pt-36 pb-8 lg:pb-16 ">
        <h1 className="text-6xl lg:text-8xl font-AnticDidone">My Toolbox</h1>
      </div>

      <TechSlide />
    </div>
  );
}

export default SkillSection;
