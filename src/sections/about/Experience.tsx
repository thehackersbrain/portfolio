import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { aboutMeResume } from "@/data";

const ExperienceSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row overflow-x-clip">
        Experience
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        {
          aboutMeResume.experience.map((exp, index) => (
            <div className="sm:inline-grid mb-6 inline-flex flex-col" key={index}>
              <div className="sm:grid sm:grid-cols-4 flex flex-col">
                <div className="col-span-2 inline-grid">
                  <span className="font-semibold">{exp.title}</span>
                  <Link
                    href={exp.companyUrl}
                    className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 text-sm text-white/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </Link>
                </div>
                <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
                  <MapPin className="size-4" />
                  <p className="text-xs ">{exp.location}</p>
                  <CalendarDays className="size-4" />
                  <p className="text-xs">{exp.year}</p>
                </div>
              </div>
              <div className="my-3 gap-3 max-w-screen">
                <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
                  {
                    exp.tags.map((tag, index) => (
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
                    exp.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ExperienceSectionP;
