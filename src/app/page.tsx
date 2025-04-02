import HeaderSection from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import TestimonialsSection from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import FooterSection from "@/sections/Footer";
import { ProjectCardsSection } from "@/sections/ProjectCards";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <ProjectsSection />
      <ProjectCardsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
