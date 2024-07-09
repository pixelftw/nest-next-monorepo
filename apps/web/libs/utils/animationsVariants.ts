import { cubicBezier, Transition, Variants } from "framer-motion";

const transition: Transition = {
  duration: 0.6,
  ease: cubicBezier(0.25, 1, 0.5, 1),
};

export const moveIn: Variants = {
  initial: {
    y: 150,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
};
