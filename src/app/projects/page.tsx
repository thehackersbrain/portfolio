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
          title="Featured Projects"
          eyebrow="1. Real-world Results"
          description="Innovative Exploits & Ingenious Builds - A Showcase of My Finest Creations."
        />
        <div className="mt-10">
          <ExpandableCardDemo />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
