"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import PaginationComp from "@/components/PaginationComp";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    // @ts-expect-error fuck it
    function onKeyDown(event) {
      if (event.key === "Escape") {
        // @ts-expect-error fuck it
        setActive(false);
      }
    }

    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // @ts-expect-error Custom hook type workaround
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              // @ts-expect-error fuck it
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              // @ts-expect-error fuck it
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/*// @ts-expect-error fuck it*/}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  // @ts-expect-error fuck it
                  src={active.src}
                  // @ts-expect-error fuck it
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      // @ts-expect-error fuck it
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200"
                    >
                      {/*// @ts-expect-error fuck it*/}
                      {active.title}
                    </motion.h3>
                    <motion.p
                      // @ts-expect-error fuck it
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400"
                    >
                      {/*// @ts-expect-error fuck it*/}
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-row gap-3 justify-center items-center mt-4 md:mt-0">
                    <motion.a
                      // @ts-expect-error fuck it
                      layoutId={`button-${active.title}-${id}`}
                      // @ts-expect-error fuck it
                      href={active.ctaLink}
                      target="_blank"
                      className="inline-flex px-4 py-2 text-sm justify-center items-center gap-1 rounded-full font-bold bg-emerald-300/90 text-black float-up-an"
                    >
                      {/*// @ts-expect-error fuck it*/}
                      {active.ctaText}
                      <ArrowUpRightIcon className="size-4" />
                    </motion.a>
                    <Link
                      // @ts-expect-error fuck it
                      href={active.githubLink}
                      passHref
                      className="w-10 h-10 inline-flex justify-center items-center rounded-lg border border-white/15 float-up-an"
                    >
                      <GithubIcon className="size-5 text-white" />
                    </Link>
                  </div>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs md:text-sm lg:text-base max-h-[50vh] md:h-fit pb-26 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {/*// @ts-expect-error fuck it*/}
                    {typeof active.content === "function"
                      ? // @ts-expect-error fuck it
                        active.content()
                      : // @ts-expect-error fuck it
                        active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            // @ts-expect-error fuck it
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-800 duration-150 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 my-5">
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-md rounded-lg font-bold bg-gray-100 hover:bg-emerald-300/90 duration-150 text-black md:mt-0 hover:cursor-pointer float-up-an inline-flex items-center"
              >
                {card.ctaText}
              </motion.button>
              <Link
                href={card.githubLink}
                passHref
                className="w-10 h-10 inline-flex justify-center items-center rounded-lg border border-white/15 float-up-an"
              >
                <GithubIcon className="size-5 text-white" />
              </Link>
            </div>
          </motion.div>
        ))}
      </ul>

      <div className="inline-flex items-center justify-center w-full mt-4">
        <PaginationComp />
      </div>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    description: "Cybercraft Labs Pvt Ltd - 2024",
    title: "Vigilante Arch",
    src: "https://opengraph.githubassets.com/1c3cbe08e54b676d626a10f4618ed849f331809ab5c0a0d925bf596d0dda5512/cybercraftlabs/vigarch-os",
    ctaText: "Visit",
    ctaLink: "https://vigarch.cybercraftlabs.org/",
    githubLink: "https://github.com/cybercraftlabs/vigarch-os",
    content: () => {
      return (
        <>
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        </>
      );
    },
  },
  {
    description: "cybercraft labs pvt ltd - 2024",
    title: "Carepulse",
    src: "https://opengraph.githubassets.com/5f4af288cd16d56dabe590adb288ea11197ce34c2310d66de2fbe17b2075b7ab/thehackersbrain/carepulse",
    ctaText: "Visit",
    ctaLink: "https://carepulse-theta.vercel.app/",
    githubLink: "https://github.com/thehackersbrain/carepulse",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Cybercraft Labs Pvt Ltd - 2024",
    title: "Brainwave",
    src: "https://opengraph.githubassets.com/a6291768c683d5aaa76f8adeb682a0fcb76b5c0b1fc2987b571532ab1bedc09b/thehackersbrain/brainwave",
    ctaText: "Visit",
    ctaLink: "https://brainwave-pearl-five.vercel.app/",
    githubLink: "https://github.com/thehackersbrain/brainwave",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Personal (THB) - 2023",
    title: "CHIP-8 Emulator",
    src: "https://opengraph.githubassets.com/c5990194d381e26954348ad60848cbd60b542a9b7e31715b1807b51a484dc0f8/thehackersbrain/chip8",
    ctaText: "Visit",
    ctaLink: "https://github.com/thehackersbrain/chip8",
    githubLink: "https://github.com/thehackersbrain/chip8",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Cybercraft Labs Pvt Ltd - 2024",
    title: "Passcraft",
    src: "https://opengraph.githubassets.com/743bf30ef4f9b563cbddab69e48214262d547747601042c6a03f1b561d857b39/thehackersbrain/passcraft",
    ctaText: "Visit",
    ctaLink: "https://github.com/thehackersbrain/passcraft",
    githubLink: "https://github.com/thehackersbrain/passcraft",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];
