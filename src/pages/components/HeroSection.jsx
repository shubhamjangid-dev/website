import React from "react";
import ShubhamJangir from "@/assets/Shubham.png";
function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white ">
      <div className="w-full h-12 sm:h-16 md:h-20 lg:h-24 border-b-[0.5px] flex justify-center border-white relative">
        <div className="w-[0.5px] min-h-screen bg-white absolute top-0 left-12 sm:left-16 md:left-20 lg:left-24"></div>
        <h1 className="m-auto text-md font-AnticDidone">Shubham Jangir</h1>
        <div className="w-[0.5px] min-h-screen bg-white absolute top-0 right-12 sm:right-16 md:right-20 lg:right-24"></div>
      </div>
      <div className="max-w-screen-lg flex-1 flex flex-col justify-between">
        <h1 className="text-3xl md:text-5xl mt-16 font-AnticDidone text-[#f49e12]">Full Stack Developer</h1>
        <div className="flex justify-center">
          <img
            src={ShubhamJangir}
            className="w-[50vh] z-10"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
