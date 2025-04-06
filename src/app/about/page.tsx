import { cn } from "@/lib/utils";
import React from "react";
import {
  MapPin,
  Mail,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";

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
    name: WhatsAppIcon,
    href: "https://wa.me/+917488930330",
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

const AboutPage = () => {
  return (
    <section className="my-16 h-screen lg:my-24">
      <div className="relative w-full lg:-mt-24 lg:pt-24 -mt-16 pt-16 border-b-1 border-[#334155] overflow-x-clip pb-4">
        <div
          className={cn(
            "absolute inset-0 -z-20",
            "[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#5ee9b50d_1px,transparent_1px),linear-gradient(to_bottom,#5ee9b50d_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-gray-900"></div>

        <div className="mx-auto container flex flex-col items-center justify-center gap-3">
          <h1 className="font-altfont font-extrabold text-3xl md:text-5xl text-center mt-6 tracking-wide">
            Gaurav Raj
          </h1>
          <p className="mt-2 text-center md:text-lg lg:text-xl primary-gradient text-transparent bg-clip-text">
            Security Reseacher and Software Engineer
          </p>
          <div className="flex flex-col gap-3 mt-2 items-center justify-center">
            <div className="inline-flex flex-col md:grid lg:grid lg:grid-cols-2 md:grid-cols-2 gap-3 items-center text-[#CBD5E1]">
              <div className="inline-flex gap-2 justify-start items-center">
                <MapPin className="h-5 w-5" />
                <p>Patna/Bihar</p>
              </div>
              <div className="inline-flex gap-2 justify-start -ml-8 items-center">
                <Mail className="h-5 w-5" />
                <Link
                  href="mailto:gauravraj0408@gmail.com"
                  className="hover:text-transparent hover:bg-gradient-to-r hover:from-emerald-300 hover:to-sky-400 hover:bg-clip-text transition-all duration-300"
                >
                  me@thehackersbrain.xyz
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 items-center justify-items-center my-2 lg:my-4 md:my-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 float-up-an text-white/60 border boder-white/15 lg:px-8 md:px-8 px-3 h-10 rounded-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <link></link>
                  <link.name className="size-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
