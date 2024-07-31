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
      className={cn('flex flex-wrap font-bold"', className)}
    >
      {words.map((word, i) => (
        <span key={word + i} className="overflow-hidden md:py-0 mx-2">
          <motion.span variants={moveIn} className="block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
