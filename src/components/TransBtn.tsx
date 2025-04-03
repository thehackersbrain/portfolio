import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const TransBtn = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link
      href={link}
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:cursor-pointer float-up-an"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="font-semibold">{text}</span>
      <ArrowRightIcon className="size-4" />
    </Link>
  );
};

export default TransBtn;
