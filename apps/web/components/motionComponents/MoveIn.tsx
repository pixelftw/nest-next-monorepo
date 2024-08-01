"use client";
import { motion } from "framer-motion";
import { MotionProps, moveIn } from "./variants";
import { PropsWithChildren } from "react";

interface MoveInProps extends PropsWithChildren, MotionProps {
  className?: string;
}

export function MoveIn({
  children,
  className,
  direction,
  animate,
  initial,
}: Readonly<MoveInProps>) {
  return (
    <motion.div
      variants={moveIn(direction)}
      className={className}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.div>
  );
}
