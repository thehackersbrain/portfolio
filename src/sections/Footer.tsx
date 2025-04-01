import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/thehackersbrain",
  },
  {
    name: "Twitter",
    href: "https://x.com/thehackersbrain",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thehackersbrain",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/thehackersbrainn",
  },
];

const FooterSection = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
