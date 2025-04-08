import { SectionHeader } from "@/components/SectionHeader";
import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { projects } from "@/data";


export function ProjectsCardSection() {
  return (
    <section
      className="py-16 lg:py-24"
      id="projectsadd"
      aria-label="Projects - Additional"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Other Noteworthy Projects"
          eyebrow="2. Honorable Mentions"
          description="Beyond the spotlight—explore more noteworthy projects that showcase my work and expertise."
        />
        <div className="mt-20 flex flex-col gap-3 items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3">
            {projects.map((project, projectIndex) => (
              <ProjectsCard
                key={project.name}
                name={project.name}
                githubLink={project.githubLink}
                externalLink={project.externalLink}
                description={project.description}
                addClassName="sticky custom-cursor"
                projectIndex={projectIndex}
              />
            ))}
          </div>
          <div className="self-end m-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:cursor-pointer float-up-an"
            >
              <span className="font-semibold">Explore My Work</span>
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
