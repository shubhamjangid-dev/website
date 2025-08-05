import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee.jsx";
const icons1 = ["tailwindcss", "js", "c++", "python", "java", "typescript", "express", "react"];
const icons2 = ["mysql", "mongodb", "nodejs", "nextjs", "render", "vercel", "git", "postman"];
export function TechSlide({ children }) {
  return (
    <div className="w-full bg-white text-black">
      <div className="h-40 md:h-80 text-xl relative flex w-full flex-col items-center justify-center overflow-hidden mx-auto gap-y-8 md:gap-y-16">
        <Marquee
          pauseOnHover
          reverse
          className="[--duration:15s] [--gap:3rem] md:[--gap:4rem] [gap:var(--gap)]"
        >
          {icons1.map((icon, index) => (
            <div className="">
              <img
                key={index}
                src={`src/assets/techStackIcons/${icon}.svg`}
                alt={`Skill`}
                className="h-10 w-10 md:h-20 md:w-20 mx-auto"
              />
              <h1 className="text-sm md:text-lg lg:text-xl">{icon}</h1>
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className=" [--duration:15s] [--gap:3rem] md:[--gap:4rem] [gap:var(--gap)]"
        >
          {icons2.map((icon, index) => (
            <div className="">
              <img
                key={index}
                src={`src/assets/techStackIcons/${icon}.svg`}
                alt={`Skill`}
                className="h-10 w-10 md:h-20 md:w-20 mx-auto"
              />
              <h1 className="text-sm md:text-lg lg:text-xl">{icon}</h1>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
