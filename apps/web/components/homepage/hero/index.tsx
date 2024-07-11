import { AnimatedHeading } from "@components/motionComponents";
import { MoveIn } from "@components/motionComponents/MoveIn";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container flex flex-col justify-center items-center gap-8 z-10">
        <AnimatedHeading className="uppercase text-9xl font-extrabold justify-center gap-2">
          Customized Diaries & Mugs
        </AnimatedHeading>
        <MoveIn>
          <p className="text-muted-foreground md:text-xl text-center max-w-[40rem]">
            Customize the cover, pages, and more to make your diary truly
            unique. Choose from a variety of designs, add your own photos and
            text, and make it your own.
          </p>
        </MoveIn>
      </div>
    </section>
  );
}
