import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Bookmark, GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const BlogsCard = ({
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
        "h-fit w-80 md:col-span-1 lg:col-span-1 float-up-an",
        addClassName,
      )}
      style={{
        top: `calc(64px + ${projectIndex * 40}px)`,
      }}
    >
      <div className="relative z-20">
        <div className="grid grid-cols-5 items-center mb-4">
          <Bookmark
            className="col-span-3 text-emerald-300/80 size-14"
            fill="#5ee9b5"
          />
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
            <div className="mt-10 flex flex-row items-center justify-between">
              <span className="text-sm text-gray-400">05/03/2025</span>
              <Link
                href="#"
                className="py-2 px-6 primary-gradient rounded-full relative"
              >
                <span className="font-bold text-gray-950">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default BlogsCard;
