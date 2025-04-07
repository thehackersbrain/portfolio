import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

const ExperienceSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row overflow-x-clip">
        Experience
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <span className="font-semibold">Python Developer</span>
              <Link
                href="https://cybercraftlabs.org/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 text-sm text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cybercraft Labs Pvt Ltd
              </Link>
            </div>
            <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
              <MapPin className="size-4" />
              <p className="text-xs ">Patna, Bihar</p>
              <CalendarDays className="size-4" />
              <p className="text-xs">Sept 2023 - Nov 2024</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Python
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Automation
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Cybersecurity
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Internal API
              </Badge>
            </div>
          </div>
          <div>
            <ul className="list-disc px-3 text-sm text-white/60">
              <li>
                Developed Python scripts for automating internal security tasks
                and vulnerability assessments.
              </li>
              <li>
                Collaborated with researchers to create proof-of-concept
                exploits and payloads.
              </li>
              <li>
                Built and maintained internal tools for pentesting and bug
                bounty workflows.
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <span className="font-semibold">Market Representative</span>
              <Link
                href="https://www.nouvmed.com/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 text-sm text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nouveau Medicament Private Limited
              </Link>
            </div>
            <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
              <MapPin className="size-4" />
              <p className="text-xs ">Patna, Bihar</p>
              <CalendarDays className="size-4" />
              <p className="text-xs">Apr 2023 - Sept 2023</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start flex-wrap">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Sales
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Market Research
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Client Relations
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Market Data
              </Badge>
            </div>
          </div>
          <div>
            <ul className="list-disc px-3 text-sm text-white/60">
              <li>
                Represented the company in regional medical product promotions
                and demos.
              </li>
              <li>
                Conducted field research and competitor analysis to improve
                outreach.
              </li>
              <li>
                Managed relationships with local pharmacies and distributors to
                expand the sales network.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSectionP;
