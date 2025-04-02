import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import TestimonialsSection from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import { ProjectsCardSection } from "@/sections/ProjectCards";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <ProjectsCardSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
