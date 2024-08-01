import { AnimatedHeading } from "@components/motionComponents";
import { MoveIn } from "@components/motionComponents/MoveIn";
import { StaggerChildren } from "@components/motionComponents/StaggerChildren";
import { Button } from "@vianlix/ui";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
      <StaggerChildren
        initial="from"
        animate="to"
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 z-10"
      >
        <MoveIn className="order-last lg:order-first">
          <Image
            src="/images/hero-image.jpg"
            width={800}
            height={600}
            alt="Person carrying tote bag"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </MoveIn>
        <div className="space-y-6">
          <AnimatedHeading className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl uppercase">
            Carry Your World in Style with Our Tote Bags
          </AnimatedHeading>
          <MoveIn>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Durable, versatile, and eco-friendly, our tote bags are the
              perfect accessory for everyday life. Carry your essentials in
              style and make a statement about your values.
            </p>
          </MoveIn>
          <MoveIn className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop the Collection
            </Link>
            <Button variant="outline" className="sm:w-auto">
              Learn More
            </Button>
          </MoveIn>
        </div>
      </StaggerChildren>
    </section>
  );
}
