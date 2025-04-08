import { Badge } from "@/components/ui/badge";
import React from "react";
import { aboutMeResume } from "@/data";

const SkillsToolsSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row overflow-x-clip">
        Skills &amp; Tools
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <span className="font-semibold text-lg">Languages</span>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
              {
                aboutMeResume.programmingLanguages.map((lang) => (
                  <Badge
                    key={lang}
                    variant="outline"
                    className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
                  >
                    {lang}
                  </Badge>
                ))
              }
            </div>
          </div>
        </div>
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <span className="font-semibold text-lg">Technologies</span>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
              {
                aboutMeResume.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))
              }
            </div>
          </div>
        </div>
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <span className="font-semibold text-lg">Tools &amp; Tools</span>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
              {
                aboutMeResume.tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
                  >
                    {tool}
                  </Badge>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SkillsToolsSectionP;
