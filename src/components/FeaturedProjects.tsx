"use strict";

import Card from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import { portfolioProjects } from "@/data";


const FeaturedProjects = () => {
  return (
    <>
      {portfolioProjects.map((project, projectIndex) => (
        <Card
          key={project.title}
          className="px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 sticky"
          style={{
            top: `calc(64px + ${projectIndex * 40}px)`,
          }}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-altfont font-bold text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm text-white/50 md:text-base"
                  >
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col mt-8 gap-4 w-full items-center md:items-start lg:items-start">
                <div className="inline-flex">
                  <AnimatedTooltip items={project.tech} />
                </div>
                <div className="inline-flex md:flex-row gap-4">
                  <Link
                    href={project.link}
                    className="bg-white text-gray-950 h-12 lg:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:cursor-pointer md:w-auto px-6 float-up-an"
                  >
                    <span>View Project</span>
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                  <Link
                    href={project.githubLink}
                    passHref
                    className="w-12 h-12 inline-flex justify-center items-center rounded-lg border border-white/15 float-up-an"
                  >
                    <GithubIcon className="size-5 text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none duration-300 ease-in-out hover:-translate-y-2 hover:-translate-x-2"
              />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default FeaturedProjects;
