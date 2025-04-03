import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";

const IntroSection = () => {
  return (
    <section
      className="pb-16 lg:py-24 mx-5"
      id="about-intro"
      aria-label="About Me - Introduction"
    >
      <div className="container mx-auto">
        <SectionHeader
          title="Introduction"
          eyebrow="0. About Me - Intro"
          description="Security Researcher, Developer & Innovator"
        />
      </div>
      <div className="mt-16 flex flex-col gap-3 items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-white/70 md:text-lg px-3 lg:px-6 pb-6">
              Hello, my name is Gaurav Raj, and I&apos;m a Cyber Security
              Researcher with a strong interest in Bug Bounty hunting,
              Penetration Testing, and programming in multiple languages,
              including Python, C, C++, Rust, and more.
              <br />
              <br />
              Throughout my studies, I have completed several projects in
              various programming languages, ranging from Full Stack Development
              to Cyber Security and Ethical Hacking. These projects have allowed
              me to gain hands-on practical knowledge, and I have developed my
              skills in developing secure systems and applications.
              <br />
              <br />
              My experience in cybersecurity includes engaging in ethical
              hacking and penetration testing activities, which have given me a
              deep understanding of how to identify and remediate security
              vulnerabilities in software, applications, and websites.
            </p>
          </div>
          <div className="justify-self-center self-center">
            <Image
              src={profileImage}
              className="size-90 -rotate-x-6 -rotate-y-10 hover:rotate-x-0 hover:rotate-y-0 outline-2 -outline-offset-2 outline-white/20 rounded-xl lg:-mt-8 float-grow-an hover:contrast-108"
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
