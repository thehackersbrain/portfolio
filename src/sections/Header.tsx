const HeaderSection = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Projects
        </a>
        <a
          className="nav-item"
          href="https://blog.thehackersbrain.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="https://raw.githubusercontent.com/thehackersbrain/resume/affbd4fec7ec673e986d7638918583b3525b4d43/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default HeaderSection;
