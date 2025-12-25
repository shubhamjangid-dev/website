import { MarqueeDemo } from "./MarqueeDemo";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqueeDemo />
      <ProjectSection />
      <SkillSection />
      <ProfileSection />
    </>
  );
}

export default HomePage;
