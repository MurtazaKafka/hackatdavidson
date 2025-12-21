import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <ProjectsSection />
        <TeamSection />
        <FAQSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
