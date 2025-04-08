import { SectionHeader } from "@/components/SectionHeader";
import BlogsCard from "@/components/BlogCard";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import TransBtn from "@/components/TransBtn";

const blogs = [
  {
    title: "Creating a Hacking Lab on Cloud using Docker for free",
    date: "2024-12-01",
    description:
      "Learn how to create a free hacking lab on the cloud using Docker and Kali Linux. This guide covers setting up a secure, cost-effective environment for penetration testing and cybersecurity experiments. Completely on Cloud for free.",
    link: "https://blog.thehackersbrain.xyz/blog/hacking-lab-on-docker",
  },
  {
    title: "Create an Image Steganography Program in Python",
    date: "2023-08-28",
    description:
      "Discover how to create an image steganography tool in Python. Learn to securely hide and extract data within PNG images using PIL and cryptography modules. Enhance your cybersecurity skills with this detailed guide.",
    link: "https://blog.thehackersbrain.xyz/blog/create-image-steg-tool",
  },
  {
    title: "Comprehensive Guide to Find & Exploit SSRF Vulnerabilities",
    date: "2024-07-11",
    description:
      "Explore an in-depth guide on finding and exploiting Server-Side Request Forgery (SSRF) vulnerabilities. Learn advanced techniques, practical examples, and methods to identify, bypass, and exploit SSRF for comprehensive web security testing.",
    link: "https://blog.thehackersbrain.xyz/blog/find-and-exploit-ssrf",
  },
  {
    title: "The Importance of Secure Coding Practices - Cybercraft Labs",
    date: "2024-03-27",
    description:
      "Learn how to create a free hacking lab on the cloud using Docker and Kali Linux. This guide covers setting up a secure, cost-effective environment for penetration testing and cybersecurity experiments. Completely on Cloud for free.",
    link: "https://blog.thehackersbrain.xyz/blog/importance-of-secure-coding/",
  },
  {
    title: "Unveiling the Dangers of Insecure Deserialization and more",
    date: "2024-08-05",
    description:
      "Explore insecure deserialization in web apps, a critical vulnerability that allows attackers to exploit serialized objects for code execution and privilege escalation. This blog covers real-world examples, causes, and best practices.",
    link: "https://blog.thehackersbrain.xyz/blog/insecure-deserialization-2024",
  },
  {
    title: "Navigating the Cloud - Introduction to Cloud Security",
    date: "2024-05-01",
    description:
      "Explore the critical role of security researchers in understanding development and deployment processes within cloud environments. Dive into real-world scenarios, expert insights, and how Cybercraftlab empowers researchers for cybersecurity excellence",
    link: "https://blog.thehackersbrain.xyz/blog/navigating-the-cloud/",
  },
];

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
