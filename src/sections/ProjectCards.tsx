import { SectionHeader } from "@/components/SectionHeader";
import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const projects = [
  {
    name: "Carepulse",
    githubLink: "https://github.com/thehackersbrain/carepulse",
    externalLink: "https://carepulse-theta.vercel.app/",
    date: "2024-07-11",
    description:
      "A healthcare patient management application using Next.js, TypeScript, and TailwindCSS. This system enables patients to register, book, and manage appointments with doctors, while providing administrators tools for scheduling, confirming, and canceling appointments. It includes SMS notifications, file upload with Appwrite storage, and performance tracking using Sentry.",
  },
  {
    name: "Brainwave",
    githubLink: "https://github.com/thehackersbrain/brainwave",
    externalLink: "https://brainwave-pearl-five.vercel.app/",
    date: "2024-07-10",
    description:
      "Brainwave, a modern UI/UX website using React.js and TailwindCSS, built with Vite. This project showcases sleek design, parallax animations, complex UI geometry, and stylish gradients. It features beautiful sections including hero, services, features, and more, ensuring responsive functionality across all devices. Brainwave exemplifies contemporary web dev practices.",
  },
  {
    name: "HooBank",
    githubLink: "https://github.com/thehackersbrain/hoobank",
    externalLink: "https://hoobank-two-wine.vercel.app/",
    date: "2024-07-08",
    description:
      "Created HooBank, a modern UI/UX website utilizing React.js and TailwindCSS. This project emphasizes sleek and responsive design, showcasing advanced web development skills and a focus on user experience. HooBank demonstrates proficiency in building visually appealing, high-performance web applications with contemporary front-end technologies.",
  },
  {
    name: "Modern Portfolio",
    githubLink: "https://github.com/thehackersbrain/minimal-portfolio",
    externalLink: "https://minimal-portfolio-blue.vercel.app/",
    date: "2024-07-07",
    description:
      "Developed a modern portfolio web app using Next.js, Three.js, Framer Motion, and TailwindCSS. This project showcases a captivating hero section, interactive 3D elements, a dynamic testimonials area, and a visually striking canvas effect. It demonstrates advanced UI/UX design, responsiveness, and a unique presentation of personal information.",
  },
  {
    name: "Vigilante Arch",
    githubLink: "https://github.com/cybercraftlabs/vigarch-os",
    externalLink: "https://vigarch.cybercraftlabs.org/",
    date: "2024-04-09",
    description:
      "Vigilante Arch is the ultimate toolkit for modern-day cyber vigilantes. Built on the robust foundation of Arch Linux, The system equips you with the tools and anonymity you need to defend or attack the digital realm. Forge your path as a digital guardian. Vigilante Arch empowers hackers, security professionals, and geeks alike to explore.",
  },
  {
    name: "Passcraft",
    githubLink: "https://github.com/thehackersbrain/passcraft",
    externalLink: "https://github.com/thehackersbrain/passcraft",
    date: "2023-05-13",
    description:
      "PassCraft is a powerful and versatile tool designed to assist in the creation of password wordlists based on an individual's personal information. It provides a streamlined and automated approach to generate customized wordlists, enhancing the efficiency of password cracking and security assessment processes. Dictionary attacks simplified.",
  },
];

export function ProjectsCardSection() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="Other Noteworthy Projects"
          eyebrow="Honorable Mentions"
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
    </div>
  );
}
