"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

interface ScrollSlideInProps extends PropsWithChildren {
  className?: string;
}

export function ScrollSlideIn({ children }: ScrollSlideInProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [180, 0]);

  return (
    <motion.div ref={targetRef} style={{ y }}>
      {children}
    </motion.div>
  );
}
