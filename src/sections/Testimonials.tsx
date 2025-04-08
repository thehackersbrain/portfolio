import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";
import { testimonials } from "@/data";


const TestimonialsSection = () => {
  return (
    <section
      className="py-16 lg:py-24"
      id="testimonials"
      aria-label="Testimonials"
    >
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
    </section>
  );
};

export default TestimonialsSection;
