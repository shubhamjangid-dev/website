import { Github } from "lucide-react";
import ReviewImage from "@/assets/review.png";
import Typingzoneimage from "@/assets/typingzone.png";
const projects = [
  {
    title: "Review",
    description:
      "Review is a web platform that lets users share a public link and collect honest feedback in one place. It includes controls to disable or reset links if they’re shared too widely, helping users manage privacy while gathering meaningful reviews.",
    image: ReviewImage,
    live: "https://review.shubhamjangir.in/",
    github: "https://github.com/shubhamjangid-dev/review-nextjs",
    techStack: ["MongoDB", "Next.js", "React Email", "Resend", "NextAuth", "Gemini", "Zod", "TypeScript", "bcryptjs", "Tailwind", "shadcn/ui"],
  },

  {
    title: "Typing Zone",
    description:
      "TypingZone is a web-based typing practice and competition platform featuring beginner-to-advanced levels and real-time multiplayer races using WebSockets, helping users improve typing speed and accuracy in a fun, competitive way.",
    image: Typingzoneimage,
    live: "https://typingzone.shubhamjangir.in/",
    github: "https://github.com/shubhamjangid-dev/TypingSpeedReact",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind", "jwt", "bcryptjs"],
  },
];
function ProjectSection() {
  return (
    <div className="w-full bg-black text-white flex flex-col pb-16">
      <div className="max-w-screen-xl text-white text-lg text-left px-12 sm:px-16 md:px-20 lg:px-36  pt-12 sm:pt-16 md:pt-20 lg:pt-36 pb-8 lg:pb-16 ">
        <h1 className="text-6xl lg:text-8xl font-AnticDidone">Projects</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-foreground border  border-neutral-700 hover:border-neutral-600 rounded-xl p-5"
            >
              <div className="overflow-hidden rounded-lg aspect-[16/10] bg-zinc-800">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </a>
              </div>
              <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold font-inter p-2 transition-colors hover:text-highlightColor"
                  aria-label={"GitHub"}
                >
                  {project.title}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors hover:text-highlightColor"
                  aria-label={"GitHub"}
                >
                  <Github />
                </a>
              </div>
              <div className="px-3 text-neutral-400 leading-relaxed text-justify">{project.description}</div>
              <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
                {project.techStack.map((tag, tagIndex) => (
                  <div
                    key={tagIndex}
                    className="flex items-center gap-1.5 border border-zinc-700
                    transition-colors
                    transition-duration-1000
                    hover:bg-zinc-700 px-2 py-1 w-fit rounded-lg text-gray-300"
                  >
                    <div className="w-2 h-2 bg-highlightColor rounded-full" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
