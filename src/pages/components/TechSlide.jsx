import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee.jsx";
import tailwindcss from "@/assets/techStackIcons/tailwindcss.svg";
import js from "@/assets/techStackIcons/js.svg";
import cpp from "@/assets/techStackIcons/c++.svg"; // Note: Use a valid JS variable name
import python from "@/assets/techStackIcons/python.svg";
import java from "@/assets/techStackIcons/java.svg";
import typescript from "@/assets/techStackIcons/typescript.svg";
import express from "@/assets/techStackIcons/express.svg";
import react from "@/assets/techStackIcons/react.svg";
import mysql from "@/assets/techStackIcons/mysql.svg";
import mongodb from "@/assets/techStackIcons/mongodb.svg";
import nodejs from "@/assets/techStackIcons/nodejs.svg";
import nextjs from "@/assets/techStackIcons/nextjs.svg";
import render from "@/assets/techStackIcons/render.svg";
import vercel from "@/assets/techStackIcons/vercel.svg";
import git from "@/assets/techStackIcons/git.svg";
import postman from "@/assets/techStackIcons/postman.svg";

const iconMap = {
  tailwindcss,
  js,
  "c++": cpp,
  python,
  java,
  typescript,
  express,
  react,
  mysql,
  mongodb,
  nodejs,
  nextjs,
  render,
  vercel,
  git,
  postman,
};

const icons1 = ["tailwindcss", "js", "c++", "python", "java", "typescript", "express", "react"];
const icons2 = ["mysql", "mongodb", "nodejs", "nextjs", "render", "vercel", "git", "postman"];
export function TechSlide({ children }) {
  return (
    <div className="w-full bg-white text-black">
      <div className="h-[50vh] text-xl relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto gap-y-12 md:gap-y-16">
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:15s] [--gap:3rem] md:[--gap:4rem] [gap:var(--gap)] p-6"
        >
          {icons1.map((icon, index) => (
            <div className="relative p-4  rounded-3xl shadow-lg">
              <img
                key={index}
                src={iconMap[icon]}
                alt={`icon`}
                className="h-10 w-10 md:h-20 md:w-20 mx-auto"
              />
              {/* <h1 className="absolute -top-8  text-sm md:text-lg lg:text-xl border-[1px] rounded-sm border-gray-400 my-2 px-2 text-gray-400 hover:text-black hover:border-black">{icon}</h1> */}
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className=" [--duration:15s] [--gap:3rem] md:[--gap:4rem] [gap:var(--gap)] p-6"
        >
          {icons2.map((icon, index) => (
            <div className="p-4 rounded-3xl shadow-lg">
              <img
                key={index}
                src={iconMap[icon]}
                alt={`icon`}
                className="h-10 w-10 md:h-20 md:w-20 mx-auto"
              />
              {/* <h1 className="text-sm md:text-lg lg:text-xl">{icon}</h1> */}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
