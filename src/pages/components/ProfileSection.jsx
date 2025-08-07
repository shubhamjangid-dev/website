import { Github, Linkedin, Mail, FileText } from "lucide-react";
import React from "react";

function ProfileSection() {
  return (
    <div className="w-full h-62 bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-lg font-AnticDidone p-10">Get In Touch</h1>
      <div className="flex gap-6 items-center justify-center">
        <a
          href="https://github.com/shubhamjangid-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://linkedin.com/in/shubhamjangir-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:s.jangid1100@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <a
          href="https://drive.google.com/file/d/1GbgdrrjngJLTwYJXMwY-dJSZSAzm1P6f/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText />
        </a>
      </div>
      <p className="text-center text-sm text-gray-400 m-10">© {new Date().getFullYear()} shubhamjangir.in. All rights reserved.</p>
    </div>
  );
}

export default ProfileSection;
