import { SectionHeader } from "@/components/SectionHeader";
import FeaturedProjects from "@/components/FeaturedProjects";

const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects" aria-label="Projects">
      <div className="container mx-auto">
        <SectionHeader
          title="Featured Projects"
          eyebrow="1. Real-world Results"
          description="Innovative Exploits & Ingenious Builds - A Showcase of My Finest Creations."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20 mx-3">
          <FeaturedProjects />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
