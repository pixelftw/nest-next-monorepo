import { AnimatedHeading } from "@components/motionComponents";
import { MoveIn } from "@components/motionComponents/MoveIn";
import Image from "next/image";

export function Hero() {
  return (
    <section>
      <div className="container flex flex-col justify-center items-center gap-8 z-10 w-full py-12 sm:px-12 md:px-20">
        <AnimatedHeading className="uppercase text-4xl sm:text-6xl md:text-8xl font-extrabold justify-center gap-1">
          Personalized Notebooks
        </AnimatedHeading>
        <MoveIn>
          <p className="text-muted-foreground md:text-xl text-center max-w-[40rem]">
            Turn your unforgettable moments into beautiful, custom-designed
            notebooks.
          </p>
        </MoveIn>
        <MoveIn className="rounded-2xl w-full overflow-hidden">
          <Image
            src="/images/hero-image.jpg"
            width={800}
            height={400}
            alt="hero-image"
            className="w-full h-full"
            priority
          />
        </MoveIn>
      </div>
    </section>
  );
}
