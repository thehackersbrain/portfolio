import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { aboutMeResume } from "@/data";

const FeaturedProjectsSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row overflow-x-clip">
        Featured Projects
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        {aboutMeResume.featuredProjects.map((project, index) => (
          <div className="sm:inline-grid mb-6 inline-flex flex-col" key={index}>
            <div className="sm:grid sm:grid-cols-4 flex flex-col">
              <div className="col-span-2 inline-grid">
                <Link
                  href={project.projectUrl}
                  className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 font-semibold"
                >
                  {project.title}
                </Link>
                <Link
                  href={project.companyUrl}
                  className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 text-sm text-white/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.company}
                </Link>
              </div>
              <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
                <CalendarDays className="size-4" />
                <p className="text-xs">{project.time}</p>
              </div>
            </div>
            <div className="my-3 gap-3 max-w-screen">
              <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
                {
                  project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))
                }
              </div>
            </div>
            <div>
              <ul className="list-disc px-3 text-sm text-white/60">
                {
                  project.results.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))
                }
              </ul>
            </div>
          </div>))}
      </div>
    </div>
  );
};

export default FeaturedProjectsSectionP;
