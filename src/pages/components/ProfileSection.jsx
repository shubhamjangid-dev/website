import GFG from "@/components/icons/GFG";
import LeetCode from "@/components/icons/LeetCode";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
function ProfileSection() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/shubhamjangid-dev",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/shubhamjangir-dev",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:shubham@shubhamjangir.in",
      icon: Mail,
    },
    {
      label: "Resume",
      href: import.meta.env.VITE_RESUME_URL,
      icon: FileText,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/shubham_jangir_2002/",
      icon: LeetCode,
    },
    {
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/sjangivvtf/",
      icon: GFG,
    },
  ];

  return (
    <div className="w-full h-62 bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-lg font-AnticDidone p-10">Get In Touch</h1>
      <TooltipProvider delayDuration={100}>
        <div className="flex items-center justify-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors hover:text-[#f49e12]"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-[#f49e12] shadow-md"
              >
                {label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      <p className="text-center text-sm text-gray-400 m-10">© {new Date().getFullYear()} shubhamjangir.in. All rights reserved.</p>
    </div>
  );
}

export default ProfileSection;
