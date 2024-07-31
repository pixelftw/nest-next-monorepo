"use client";
import { moveIn } from "@libs/utils/animationsVariants";
import { cn } from "@vianlix/ui/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedHeadingProps extends PropsWithChildren {
  className?: string;
}

export function AnimatedHeading({
  className,
  children,
}: Readonly<AnimatedHeadingProps>) {
  if (typeof children !== "string") {
    throw new Error("AnimatedHeading only renders text content");
  }

  const words = children.split(" ");

  return (
    <motion.h2
      transition={{
        staggerChildren: 0.2,
      }}
      initial="initial"
      animate="animate"
      className={cn('flex flex-wrap gap-3 font-bold"', className)}
    >
      {words.map((word, i) => (
        <span className="overflow-hidden py-2 mx-2">
          <motion.span key={word + i} variants={moveIn} className="block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
