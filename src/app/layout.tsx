import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import HeaderSection from "@/sections/Header";
import FooterSection from "@/sections/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const calibre = localFont({
  src: [
    {
      path: "../fonts/Calibre/Calibre-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Calibre/Calibre-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Calibre/Calibre-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Calibre/Calibre-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Calibre/Calibre-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Calibre/Calibre-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Calibre/Calibre-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Calibre/Calibre-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-alt",
});

export const metadata: Metadata = {
  title:
    "Gaurav Raj (@thehackersbrain) | Security Researcher and Software Engineer",
  description:
    "Hi, I'm Gaurav Raj, I'm a Cyber Security Researcher and Developer with over a half decade (5+ years) of experience. Skilled in multiple programming languages like Python, Rust, JavaScript, C, C++, and more. My expertise extends to and beyond, DevOps, Reverse-Engineering, Development (Full Stack Software Developer), and more. Mostly involved in Bug-Hunting or FreeLance about. But at the core, I'm just a quick and passionate learner who likes to explore",
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
          calibre.variable,
          "bg-gray-900 text-white antialiased font-sans",
        )}
      >
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
      <GoogleAnalytics gaId="G-CEG2JP4Y9V" />
    </html>
  );
}
