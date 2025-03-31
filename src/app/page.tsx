import { CarouselDemo } from "@/components/CarouselDemon";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container flex flex-col items-center">
      <p className="text-3xl text-center underline my-3">Gaurav Raj</p>
      <Button>Learn More</Button>
      <CarouselDemo />
    </div>
  );
}
