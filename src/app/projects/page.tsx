import { ExpandableCardDemo } from "@/sections/ProjectsList";
import { SectionHeader } from "@/components/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaurav Raj (@thehackersbrain) | All Projects | Portfolio",
  description:
    "Hi, I'm Gaurav Raj, I'm a Cyber Security Researcher and Developer with over a half decade (5+ years) of experience. Skilled in multiple programming languages like Python, Rust, JavaScript, C, C++, and more. My expertise extends to and beyond, DevOps, Reverse-Engineering, Development (Full Stack Software Developer), and more. Mostly involved in Bug-Hunting or FreeLance about. But at the core, I'm just a quick and passionate learner who likes to explore",
};

const ProjectsPage = () => {
  return (
    <section
      className="pb-16 lg:py-24 my-16 lg:my-3"
      id="projects"
      aria-label="Projects"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Built to Break & Rebuild"
          eyebrow="1. Systems with Purpose"
          description="A Showcase of Tools and Exploits Born from Real-World Challenges and Curiosity."
        />
        <div className="mt-10">
          <ExpandableCardDemo />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
