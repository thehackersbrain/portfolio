import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Gaurav Raj (@thehackersbrain)' | Security Researcher and Software Engineer",
  description:
    "Hi, I'm Gaurav Raj, I'm a Cyber Security Researcher and Developer with over a half decade (5+ years) of experience. Skilled in multiple programming languages like Python, Rust, JavaScript, C, C++, and more. My expertise extends to and beyond, DevOps, Reverse-Engineering, Development (Full Stack Software Developer), and more. Mostly involved in Bug-Hunting or FreeLance projects. But at the core, I'm just a quick and passionate learner who likes to explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
