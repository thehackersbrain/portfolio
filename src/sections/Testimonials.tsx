import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Alex Turner",
    position: "CTO @ CyberShield",
    text: "Gaurav was instrumental in securing our infrastructure against critical threats. His ability to identify and patch vulnerabilities before they became issues is truly exceptional. We trust him completely!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Lead Developer @ SecureCode",
    text: "Working with Gaurav was a game-changer. His deep understanding of secure coding practices helped us eliminate major security flaws. Our applications are now more robust than ever.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ PentestPro",
    text: "Gaurav's penetration testing skills are second to none. He uncovered vulnerabilities that other teams missed, helping us reinforce our security posture significantly. We couldn’t be more impressed.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Security Engineer @ GlobalTech",
    text: "Gaurav is a true cybersecurity expert. His research into advanced exploitation techniques gave our team valuable insights. His contributions have strengthened our defenses tremendously.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Gaurav’s expertise in secure software development has been invaluable. He not only built high-performance systems but also ensured they were resilient against real-world threats. Highly recommended!",
    avatar: memojiAvatar5,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="What Clients Say About Me"
          eyebrow="3. Happy Clients"
          description="Don&#39;t just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip fade-sideways py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="mx-3 max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
