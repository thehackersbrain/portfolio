"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import ReactIcon from "@/assets/icons/react.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "Linux",
    iconType: Html5Icon,
  },
  {
    title: "Vim",
    iconType: CssIcon,
  },
  {
    title: "Emacs",
    iconType: ChromeIcon,
  },
  {
    title: "Bash",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "🤬",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "☹️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Chess",
    emoji: "🎨",
    left: "10%",
    top: "35%",
  },
  {
    title: "Psychology",
    emoji: "⚽️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Playing",
    emoji: "🤖",
    left: "70%",
    top: "45%",
  },
  {
    title: "Games",
    emoji: "💀",
    left: "5%",
    top: "65%",
  },
  {
    title: "Painting",
    emoji: "🦾",
    left: "45%",
    top: "70%",
  },
  {
    title: "Photography",
    emoji: "☠️",
    left: "55%",
    top: "25%",
  },
];

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28 px-3">
      <div className="container mx-auto">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={BookImage}
                  alt="Book Cover"
                  className="float-grow-an"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left"
              />
              <ToolBoxItems
                items={toolboxItems}
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
                {hobbies.map((hobby) => (
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
