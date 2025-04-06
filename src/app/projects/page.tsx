import { ExpandableCardDemo } from "@/sections/ProjectsList";
import { SectionHeader } from "@/components/SectionHeader";

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
