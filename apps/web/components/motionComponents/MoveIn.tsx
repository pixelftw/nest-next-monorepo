"use client";
import { motion } from "framer-motion";
import { MotionProps, moveIn } from "./variants";
import { PropsWithChildren } from "react";

interface MoveInProps extends PropsWithChildren, MotionProps {}

export function MoveIn({ children }: Readonly<MoveInProps>) {
  return (
    <motion.div variants={moveIn} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
