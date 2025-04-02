import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Folder, GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ProjectsCard = ({
  name,
  githubLink,
  externalLink,
  description,
  addClassName,
  projectIndex,
}: {
  name: string;
  githubLink: string;
  externalLink: string;
  description: string;
  addClassName?: string;
  projectIndex: number;
}) => {
  return (
    <CardSpotlight
      className={twMerge(
        "h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative",
        addClassName,
      )}
      style={{
        top: `calc(64px + ${projectIndex * 40}px)`,
      }}
    >
      <div className="relative z-20">
        <div className="grid grid-cols-5 items-center mb-4">
          <Folder className="col-span-3 size-14" />
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="col-span-1 justify-self-end float-up-an"
          >
            <GithubIcon className="size-5" />
          </Link>
          <Link
            href={externalLink}
            target="_blank"
            rel="noreferrer"
            className="col-span-1 justify-self-end float-up-an"
          >
            <SquareArrowOutUpRight className="size-5" />
          </Link>
        </div>
        <div className="w-full">
          <p className="text-xl font-bold mt-1 text-white">{name}</p>
          <div className="text-neutral-200 text-sm mt-4 relative z-20">
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default ProjectsCard;
