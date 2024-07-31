import { AnimatedHeading } from "@components/motionComponents";
import { MoveIn } from "@components/motionComponents/MoveIn";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container flex flex-col justify-center items-center gap-8 z-10">
        <AnimatedHeading className="uppercase text-9xl font-extrabold justify-center gap-2">
          Personalized Notebooks
        </AnimatedHeading>
        <MoveIn>
          <p className="text-muted-foreground md:text-xl text-center max-w-[40rem]">
            Turn your unforgettable moments into beautiful, custom-designed
            notebooks.
          </p>
        </MoveIn>
        <MoveIn className="rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-image.jpg"
            width={800}
            height={400}
            alt="hero-image"
            className="w-[80rem]"
          />
        </MoveIn>
      </div>
    </section>
  );
}
