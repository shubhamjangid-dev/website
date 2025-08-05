import React from "react";
import ShubhamJangir from "../assets/Shubham.png";
import { MarqueeDemo } from "./MarqueeDemo";
function HomePage() {
  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center text-white ">
        <div className="w-full h-24 border-b-[0.5px] flex justify-center border-white relative">
          <div className="w-[0.5px] min-h-screen bg-white absolute top-0 left-24"></div>
          <h1 className="m-auto text-xl font-AnticDidone">Shubham Jangir</h1>
          <div className="w-[0.5px] min-h-screen bg-white absolute top-0 right-24"></div>
        </div>
        <div className="max-w-screen-lg flex-1 flex flex-col justify-between">
          <h1 className="text-5xl mt-16 font-AnticDidone text-[#cca700]">Full Stack Developer</h1>
          <div className="flex justify-center">
            <img
              src={ShubhamJangir}
              className="w-[50vh]"
            ></img>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white p-24 flex ">
        <div className="max-w-screen-xl flex-1 p-10 text-lg text-left ">
          <h1 className="text-8xl font-AnticDidone">A Little About Me</h1>
        </div>
        <div className="max-w-screen-xl  flex-1 p-10 text-lg text-left  ">
          <p>
            I'm Shubham Jangir, a full-stack developer passionate about building end-to-end web products. I've taken ideas from 0 to 1, scaled them further, and constantly strive to improve both the
            product and the process behind it. With a background in computer science and hands-on experience across frontend, backend, and real-time systems, I enjoy turning concepts into functional,
            user-centered solutions.
          </p>
          <p>
            I’m driven by curiosity and the satisfaction of turning ideas into real, usable products—whether through code, tools, or problem-solving. I thrive in collaborative environments where
            transparency, growth, and a hands-on mindset are part of the culture.
          </p>
        </div>
      </div>

      <MarqueeDemo />
    </>
  );
}

export default HomePage;
