import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

const ExperienceSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row">
        Experience
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        <div className="sm:inline-grid mb-4 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2">
              <span className="font-semibold">Python Developer</span>
              <p className="text-sm text-white/80">Cybercraft Labs Pvt Ltd</p>
            </div>
            <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
              <MapPin className="size-4" />
              <p className="text-xs ">Patna, Bihar</p>
              <CalendarDays className="size-4" />
              <p className="text-xs">Sept 2023 - Nov 2024</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50"
              >
                Testing
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50"
              >
                Testing
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50"
              >
                Testing
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50"
              >
                Testing
              </Badge>
            </div>
          </div>
          <div>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </div>
        </div>
        <div className="sm:col-span-3 inline-flex flex-col">
          <div className="sm:inline-grid mb-4 inline-flex flex-col">
            <div className="sm:grid sm:grid-cols-4 flex flex-col">
              <div className="col-span-2">
                <span className="font-semibold">Python Developer</span>
                <p className="text-sm text-white/80">Cybercraft Labs Pvt Ltd</p>
              </div>
              <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
                <MapPin className="size-4" />
                <p className="text-xs ">Patna, Bihar</p>
                <CalendarDays className="size-4" />
                <p className="text-xs">Sept 2023 - Nov 2024</p>
              </div>
            </div>
            <div className="my-3 gap-3 max-w-screen">
              <div className="flex flex-row gap-3 items-center justify-start">
                <Badge
                  variant="outline"
                  className="outline outline-white/25 text-white/50"
                >
                  Testing
                </Badge>
                <Badge
                  variant="outline"
                  className="outline outline-white/25 text-white/50"
                >
                  Testing
                </Badge>
                <Badge
                  variant="outline"
                  className="outline outline-white/25 text-white/50"
                >
                  Testing
                </Badge>
                <Badge
                  variant="outline"
                  className="outline outline-white/25 text-white/50"
                >
                  Testing
                </Badge>
              </div>
            </div>
            <div>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSectionP;
