"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@vianlix/ui/lib/utils";

interface StaggerChildrenProps extends PropsWithChildren {
  initial: "from" | "to";
  animate: "from" | "to";
  className?: string;
}

export function StaggerChildren({
  children,
  className,
  initial,
  animate,
}: Readonly<StaggerChildrenProps>) {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
