"use client";
import { cn } from "@vianlix/ui/lib/utils";
import {
  cubicBezier,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { PropsWithChildren, useRef } from "react";

interface ScrollRevealTextProps extends PropsWithChildren {
  className?: string;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

export function ScrollRevealText({
  children,
  className,
}: Readonly<ScrollRevealTextProps>) {
  const scrollTargetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["center end", "end center"],
  });

  if (typeof children !== "string") {
    throw Error("ScrollRevealText can only accept children of type string");
  }

  const words = children.split(" ");

  return (
    <h2
      ref={scrollTargetRef}
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((w, i) => (
        <Word
          key={w + i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, 1]}
        />
      ))}
    </h2>
  );
}

function Word({ word, range, progress }: Readonly<WordProps>) {
  const y = useTransform(progress, range, [40, 0], {
    ease: cubicBezier(0.2, 0.5, 1.1, 1),
  });
  const scaleY = useTransform(progress, range, [0, 1], {
    ease: cubicBezier(0.2, 0.5, 1.1, 1),
  });

  return (
    <span className="overflow-hidden">
      <motion.span style={{ y, scaleY }} className="block">
        {word}&nbsp;
      </motion.span>
    </span>
  );
}
