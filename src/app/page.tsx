import HeaderSection from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import TestimonialsSection from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import FooterSection from "@/sections/Footer";
import { CardSpotlightDemo } from "@/sections/ProjectCards";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <ProjectsSection />
      <CardSpotlightDemo />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
