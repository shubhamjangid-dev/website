import { useState } from "react";
import { Switch } from "@/components/ui/switch";
function AboutSection() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const paragraph =
    "I'm Shubham Jangir, a full-stack developer passionate about building end-to-end web products. I've taken ideas from 0 to 1, scaled them further, and constantly strive to improve both the product and the process behind it. With a background in computer science and hands-on experience across frontend, backend, and real-time systems, I enjoy turning concepts into functional user-centered solutions.";

  const importantWords = [
    "Shubham",
    "Jangir,",
    "full-stack",
    "developer",
    "passionate",
    "end-to-end",
    "web",
    "products.",
    "computer",
    "science",
    "frontend,",
    "backend,",
    "real-time",
    "systems,",
    "functional",
    "user-centered",
    "solutions.",
  ];
  const paragraph2 =
    "I’m driven by curiosity and the satisfaction of turning ideas into real, usable products—whether through code, tools, or problem-solving. I thrive in collaborative environments where transparency, growth, and a hands-on mindset are part of the culture.";

  const importantWords2 = [
    "curiosity",
    "satisfaction",
    "turning",
    "ideas",
    "real",
    "usable",
    "products",
    "code,",
    "tools,",
    "problem-solving.",
    "thrive",
    "collaborative",
    "environments",
    "transparency,",
    "growth,",
    "hands-on",
    "mindset",
    "culture.",
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col md:flex-row">
      <div className="max-w-screen-xl md:flex-1 p-4 lg:p-10 text-lg text-left ">
        <h1 className="text-6xl lg:text-8xl font-AnticDidone">A Little About Me</h1>
        <div className="my-4 md:my-8">
          <Switch
            className=""
            value={isHighlighted}
            onClick={() => {
              setIsHighlighted(prev => !prev);
            }}
          />
        </div>
      </div>
      <div className="max-w-screen-xl  flex-1 p-4 lg:p-10 text-lg text-left text-black/70">
        <p className="">
          {paragraph.split(" ").map((word, index) => {
            const isImp = importantWords.includes(word);
            return (
              <span
                key={index}
                className={`${isHighlighted ? (isImp ? "" : "line-through text-gray-300") : " "}`}
              >
                {word + " "}
              </span>
            );
          })}
        </p>
        <p className="">
          {paragraph2.split(" ").map((word, index) => {
            const isImp = importantWords2.includes(word);
            return (
              <span
                key={index}
                className={`${isHighlighted ? (isImp ? "text-black" : "line-through text-gray-300") : " "}`}
              >
                {word + " "}
              </span>
            );
          })}
        </p>
        {/* <p>
          I'm Shubham Jangir, a full-stack developer passionate about building end-to-end web products. I've taken ideas from 0 to 1, scaled them further, and constantly strive to improve both the
          product and the process behind it. With a background in computer science and hands-on experience across frontend, backend, and real-time systems, I enjoy turning concepts into functional,
          user-centered solutions.
        </p>
        <p>
          I’m driven by curiosity and the satisfaction of turning ideas into real, usable products—whether through code, tools, or problem-solving. I thrive in collaborative environments where
          transparency, growth, and a hands-on mindset are part of the culture.
        </p> */}
      </div>
    </div>
  );
}

export default AboutSection;
