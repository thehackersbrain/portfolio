import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section
      className="py-20 lg:py-28 px-3"
      id="contact"
      aria-label="Contact Me"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Get In Touch"
          eyebrow="6. What's next?"
          description="My inbox is always open ☺️"
        />
        <div className="mt-16 flex flex-col gap-3 items-center">
          <p className="text-center lg:text-xl max-w-2xl px-3 text-white/70 md:text-lg pb-6">
            While I&apos;m currently immersed in Freelancing projects in
            Software Development, DevOps, and Cybersecurity (Bug Hunting /
            Pentests), I&apos;m always open to exciting full-time opportunities.
            <br />
            My inbox is always open -- whether you have a project to discuss, a
            question to ask, or just want to say hello. I&apos;ll do my best to
            get back to you promptly!
          </p>
          <Link
            href="mailto:gauravraj0408@gmail.com"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:cursor-pointer float-up-an"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="font-semibold">Say Hello</span>
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
