import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { CareerObjective } from "@/components/portfolio/career-objective";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Certifications } from "@/components/portfolio/certifications";
import { Achievements } from "@/components/portfolio/achievements";
import { Experience } from "@/components/portfolio/experience";
import { Training } from "@/components/portfolio/training";
import { OtherSections } from "@/components/portfolio/other-sections";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CareerObjective />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Training />
        <Certifications />
        <Achievements />
        <OtherSections />
      </main>
      <Footer />
    </div>
  );
}
