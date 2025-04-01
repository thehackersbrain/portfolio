"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { useRouter } from "next/navigation";

const ExploreButton = () => {
  const router = useRouter();

  return (
    <button
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:cursor-pointer"
      onClick={() => router.push("/#projects")}
    >
      <span className="font-semibold">Explore My Work</span>
      <ArrowDown className="size-4 animate-bounce" />
    </button>
  );
};

export default ExploreButton;
