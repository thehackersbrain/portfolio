import { SectionHeader } from "@/components/SectionHeader";
import ProjectsCard from "@/components/ProjectsCard";

const projects = [
  {
    name: "Snapgram",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Vigarch",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Hiddenwave",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Webhawk",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Passcraft",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Saycheese",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
];

export function ProjectsCardSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="Other Noteworthy Projects"
          eyebrow="Honorable Mentions"
          description="Don&#39;t just take my word for it. See what my clients have to say
        about my work."
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
                addClassName="sticky"
                projectIndex={projectIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
