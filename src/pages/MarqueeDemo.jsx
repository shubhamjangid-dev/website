import { Marquee } from "@/components/magicui/marquee.jsx";
import Seperator from "@/assets/Seperator.svg";
export function MarqueeDemo() {
  return (
    <div className="w-full bg-black text-white">
      <div className="h-20 md:h-28 lg:h-40 text-4xl md:text-5xl lg:text-7xl relative flex w-full max-w-screen-lg flex-col items-center justify-center overflow-hidden mx-auto ">
        <Marquee
          pauseOnHover
          className="[--duration:20s] [--gap:2rem] [gap:var(--gap)]"
        >
          <h1>Code </h1>
          <img src={Seperator} alt="*"></img>
          <h1>Create </h1>
          <img src={Seperator} alt="*"></img>
          <h1>Iterate</h1>
          <img src={Seperator} alt="*"></img>
          <h1>Ship</h1>
          <img src={Seperator} alt="*"></img>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </div>
  );
}
