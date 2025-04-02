import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SectionHeader } from "@/components/SectionHeader";
import { Folder, GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function CardSpotlightDemo() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          title="Other Noteworthy Projects"
          eyebrow="Honorable Mentions"
          description="Don&#39;t just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-20 flex flex-col gap-3 items-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:grid-cols-3">
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
            <CardSpotlight className="h-fit w-80 md:col-span-1 lg:col-span-1 float-grow-an hover:z-20 hover:relative">
              <div className="relative z-20">
                <div className="grid grid-cols-5 items-center mb-4">
                  <Folder className="col-span-3 size-14" />
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <GithubIcon className="size-5" />
                  </Link>
                  <Link
                    href="https://github.com/thehackersbrain/snapgram"
                    target="_blank"
                    rel="noreferrer"
                    className="col-span-1 justify-self-end float-up-an"
                  >
                    <SquareArrowOutUpRight className="size-5" />
                  </Link>
                </div>
                <div className="w-full">
                  <p className="text-xl font-bold mt-1 text-white">
                    Authentication steps
                  </p>
                  <div className="text-neutral-200 text-sm mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                      <li>Enter your email address</li>
                      <li>Create a strong password</li>
                      <li>Set up two-factor authentication</li>
                      <li>Verify your identity</li>
                    </ul>
                  </div>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your
                    personal information and data.
                  </p>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </div>
  );
}
