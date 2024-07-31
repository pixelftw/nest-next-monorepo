"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface StaggerChildrenProps extends PropsWithChildren {
  variant: "from" | "to";
}

export function StaggerChildren({ children }: Readonly<StaggerChildrenProps>) {
  return (
    <motion.div transition={{ staggerChildren: 0.2 }}>{children}</motion.div>
  );
}
