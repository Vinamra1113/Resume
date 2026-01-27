import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { CareerObjective } from "@/components/portfolio/career-objective";
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Certifications } from "@/components/portfolio/certifications";
import { Achievements } from "@/components/portfolio/achievements";
import { Experience } from "@/components/portfolio/experience";
import { data } from "@/lib/data";

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
        <Certifications />
        <Achievements />
      </main>
      <footer className="py-8 bg-card border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
