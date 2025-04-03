import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";
import TestimonialsSection from "@/sections/Testimonials";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import { ProjectsCardSection } from "@/sections/ProjectCards";
import IntroSection from "@/sections/Introduction";
import BlogsSection from "@/sections/Blogs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ProjectsSection />
      <ProjectsCardSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <BlogsSection />
      <ContactSection />
    </>
  );
}
