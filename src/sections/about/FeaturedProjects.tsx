import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

const FeaturedProjectsSectionP = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-4 gap-3 my-4 mb-3 md:mb-0 lg:mb-0 border-b-1 py-3 border-[#334155] w-full">
      <h3 className="sm:col-span-1 text-xl font-bold font-altfont flex flex-row overflow-x-clip">
        Featured Projects
      </h3>
      <div className="sm:col-span-3 inline-flex flex-col">
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <Link
                href="https://snapgram-two-self.vercel.app/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 font-semibold"
              >
                Snapgram
              </Link>
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
              <CalendarDays className="size-4" />
              <p className="text-xs">Jul 2024</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Typescript
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Next.js
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Tailwindcss
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Appwrite
              </Badge>
            </div>
          </div>
          <div>
            <ul className="list-disc px-3 text-sm text-white/60">
              <li>Responsive &amp; Modern Design</li>
              <li>Full-Functional from Scratch Backend</li>
              <li>Build with React, Appwrite, Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <Link
                href="https://vigarch.cybercraftlabs.org/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 font-semibold"
              >
                Vigilante Linux
              </Link>
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
              <CalendarDays className="size-4" />
              <p className="text-xs">Apr 2024</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Typescript
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Next.js
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Tailwindcss
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Appwrite
              </Badge>
            </div>
          </div>
          <div>
            <ul className="list-disc px-3 text-sm text-white/60">
              <li>Responsive &amp; Modern Design</li>
              <li>Full-Functional from Scratch Backend</li>
              <li>Build with React, Appwrite, Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="sm:inline-grid mb-6 inline-flex flex-col">
          <div className="sm:grid sm:grid-cols-4 flex flex-col">
            <div className="col-span-2 inline-grid">
              <Link
                href="https://github.com/thehackersbrain/chip8/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 font-semibold"
              >
                CHIP-8 Emulator
              </Link>
              <Link
                href="https://thehackersbrain.xyz/"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300 text-sm text-white/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal (THB)
              </Link>
            </div>
            <div className="col-span-2 flex flex-row gap-2 items-center justify-end text-white/60">
              <CalendarDays className="size-4" />
              <p className="text-xs">Feb 2023</p>
            </div>
          </div>
          <div className="my-3 gap-3 max-w-screen">
            <div className="flex flex-row gap-3 items-center justify-start">
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Rust
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                Git/Github
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                System Programming
              </Badge>
              <Badge
                variant="outline"
                className="outline outline-white/25 text-white/50 float-up-an transition-all duration-300"
              >
                x86 Assembly
              </Badge>
            </div>
          </div>
          <div>
            <ul className="list-disc px-3 text-sm text-white/60">
              <li>Gaming Console Emulator in Rust</li>
              <li>Learned Systems Programming &amp; x86 Assembly</li>
              <li>Memory Management &amp; CPU Emulation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSectionP;
