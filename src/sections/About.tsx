"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import MapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { basicInfo } from "@/data";


const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28 px-3" id="about" aria-label="About Me">
      <div className="container mx-auto">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="4. About Me - Workflow"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 md:mt-0 inline-grid w-full justify-center items-center">
                <AnimatedTestimonials testimonials={basicInfo.books} />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="A mix of powerful tools I use to code, hack, and build cool stuff ⚡🚀"
                className=""
              />
              <ToolBoxItems
                items={basicInfo.toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left"
              />
              <ToolBoxItems
                items={basicInfo.toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {basicInfo.hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 primary-gradient rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full primary-gradient -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full primary-gradient -z-10"></div>
                <Image src={smileMemoji} alt="smiley" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
