import React from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const socialLinks = [
  {
    name: GithubIcon,
    href: "https://github.com/thehackersbrain",
  },
  {
    name: TwitterIcon,
    href: "https://x.com/thehackersbrain",
  },
  {
    name: InstagramIcon,
    href: "https://instagram.com/thehackersbrain",
  },
  {
    name: LinkedinIcon,
    href: "https://linkedin.com/in/thehackersbrainn",
  },
];

const FooterSection = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none" />
      <div className="container mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex md:flex-row items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 float-up-an"
                target="_blank"
                rel="noreferrer"
              >
                <link.name className="size-5 text-white/60" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
