import React from "react";
import ShubhamJangir from "../assets/Shubham.png";
import { MarqueeDemo } from "./MarqueeDemo";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProfileSection from "./components/ProfileSection";
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqueeDemo />
      <SkillSection />
      <ProfileSection />
    </>
  );
}

export default HomePage;
