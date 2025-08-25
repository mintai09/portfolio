import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ResearchSection from "./components/ResearchSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import AwardsSection from "./components/AwardSection";
import AboutSection from "./components/AboutSection";
import AskSection from "./components/AskSection";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ResearchSection />
      <AwardsSection />
      <AskSection />
    </div>
  );
}

export default App;
