import Link from "next/link";
import { House } from "lucide-react";

const HeaderSection = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex md:gap-1 lg:gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link className="nav-item" href="/">
          <House className="size-5" />
        </Link>
        <Link className="nav-item" href="/#about">
          About
        </Link>
        <Link
          className="nav-item"
          href="https://blog.thehackersbrain.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </Link>
        <Link className="nav-item" href="/#projects">
          Projects
        </Link>
        <Link
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="https://raw.githubusercontent.com/thehackersbrain/resume/affbd4fec7ec673e986d7638918583b3525b4d43/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </Link>
      </nav>
    </div>
  );
};

export default HeaderSection;
