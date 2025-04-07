import { CalendarDays } from "lucide-react";
import React from "react";

const EducationSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="col-span-1 text-xl font-bold font-altfont">Education</h3>
      <div className="col-span-3">
        <div className="grid grid-cols-4 mb-3">
          <div className="col-span-3">
            <span className="font-semibold">B.Sc (Hons.) Zoology</span>
            <p className="text-sm text-white/80">
              Magadh University, Bodh Gaya, Patna
            </p>
          </div>
          <div className="col-span-1 flex flex-row gap-2 items-center justify-center text-white/60">
            <CalendarDays className="size-4" />
            <p className="text-xs">2021</p>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <span className="font-semibold">I.Sc (Science)</span>
            <p className="text-sm text-white/80">
              R.R.P. College, Bhergawan, Patna
            </p>
          </div>
          <div className="col-span-1 flex flex-row gap-2 items-center justify-center text-white/60">
            <CalendarDays className="size-4" />
            <p className="text-xs">2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSectionP;
