import { CarouselDemo } from "@/components/CarouselDemon";
import { Button } from "@/components/ui/button";
import HeaderSection from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import TapeSection from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <div className="container flex flex-col items-center">
        <p className="text-3xl text-center underline my-3 font-serif">
          Gaurav Raj
        </p>
        <Button>Learn More</Button>
        <CarouselDemo />
      </div>
    </div>
  );
}
