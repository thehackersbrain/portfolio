import { SectionHeader } from "@/components/SectionHeader";
import BlogsCard from "@/components/BlogCard";
import TransBtn from "@/components/TransBtn";
import { blogs } from "@/data";


const sortedBlogs = blogs.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const BlogsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="blogs" aria-label="Blogs">
      <div className="container mx-auto">
        <SectionHeader
          title="Dumps from My Mind"
          eyebrow="5. Collection of Thoughts"
          description="Unfiltered Thoughts, Unpatched Ideas – A Glimpse Into My Mind."
        />
        <div className="mt-20 flex flex-col gap-3 items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3">
            {sortedBlogs.map((blog, blogIndex) => (
              <BlogsCard
                key={blogIndex}
                name={blog.title}
                githubLink="https://github.com/thehackersbrain/"
                externalLink="https://blog.thehackersbrain.dev/"
                description={blog.description}
                addClassName="sticky custom-cursor"
                blogDate={blog.date}
                blogLink={blog.link}
                projectIndex={blogIndex}
              />
            ))}
          </div>
          <div className="self-end m-3">
            <TransBtn
              link="https://blog.thehackersbrain.xyz/"
              text="Read More"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
