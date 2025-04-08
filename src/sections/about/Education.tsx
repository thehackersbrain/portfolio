import { CalendarDays } from "lucide-react";
import React from "react";
import { aboutMeResume } from "@/data";

const EducationSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="col-span-1 text-xl font-bold font-altfont">Education</h3>
      <div className="col-span-3">
        {
          aboutMeResume.education.map((edu, index) => (
            <div className="grid grid-cols-4 mb-3">
              <div className="col-span-3">
                <span className="font-semibold">{edu.title}</span>
                <p className="text-sm text-white/80">
                  {edu.institution}
                </p>
              </div>
              <div className="col-span-1 flex flex-row gap-2 items-center justify-center text-white/60">
                <CalendarDays className="size-4" />
                <p className="text-xs">{edu.year}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default EducationSectionP;
