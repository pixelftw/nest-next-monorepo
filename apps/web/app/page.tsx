import { Hero, Steps } from "@components/homepage";
import { SmoothScroll } from "@components/smoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Steps />
      </main>
    </SmoothScroll>
  );
}
