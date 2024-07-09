import { AnimatedHeading } from "@components/animations";
``;
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container text-center flex items-center flex-col justify-center bg-blue-100">
        <AnimatedHeading className="uppercase text-9xl font-extrabold">
          Dairies, Mugs,Wallets Customized
        </AnimatedHeading>
        <p className="text-muted-foreground md:text-xl">
          Customize the cover, pages, and more to make your diary truly unique.
          Choose from a variety of designs, add your own photos and text, and
          make it your own.
        </p>
        <Image
          src="/images/hero-image.webp"
          width="800"
          height="600"
          alt="Diary Customization"
          className="mx-auto aspect-square overflow-hidden object-contain"
        />
      </div>
    </section>
  );
}
