import { SectionHeader } from "@/components/SectionHeader";
import BlogsCard from "@/components/BlogCard";

const blogs = [
  {
    name: "Snapgram",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Vigarch",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Hiddenwave",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Webhawk - Web Recon Framework for Pentesting or Bug Hunting",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Passcraft - Create targeted wordlist for phishing attacks",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
  {
    name: "Saycheese - Capture images or target via phishing link",
    githubLink: "https://github.com/thehackersbrain/snapgram",
    externalLink: "https://snapgram.netlify.app/",
    description:
      "A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family. A social media app that allows users to share photos and videos with friends and family.A social media app that allows users to share photos and videos with friends and family.",
  },
];

const BlogsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="blogs" aria-label="Blogs">
      <div className="container mx-auto">
        <SectionHeader
          title="Blogs representing Mind"
          eyebrow="Collection of Thoughts"
          description="Innovative Exploits & Ingenious Builds - A Showcase of My Finest Creations."
        />{" "}
        <div className="mt-20 flex flex-col gap-3 items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3">
            {blogs.map((blog, blogIndex) => (
              <BlogsCard
                key={blog.name}
                name={blog.name}
                githubLink={blog.githubLink}
                externalLink={blog.externalLink}
                description={blog.description}
                addClassName="sticky custom-cursor"
                projectIndex={blogIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
