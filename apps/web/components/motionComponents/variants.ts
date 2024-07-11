import { Variants, cubicBezier } from "framer-motion";

interface MotionProps {
  whileInView?: Variants | string;
  initial?: Variants | string;
  animate?: Variants | string;
}

const moveIn: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: cubicBezier(0.33, 1, 0.68, 1),
    },
  },
};

export { moveIn, type MotionProps };
