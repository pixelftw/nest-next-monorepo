import { Variants } from "framer-motion";

interface MotionProps {
  whileInView?: Variants | string;
  initial?: Variants | string;
  animate?: Variants | string;
  direction?: "top" | "bottom";
}

const transition = {
  duration: 0.3,
  ease: "easeOut",
};

const moveIn = (direction: MotionProps["direction"] = "bottom"): Variants => ({
  from: {
    y: direction === "bottom" ? 40 : -40,
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition,
  },
});

const scaleIn = (): Variants => ({
  from: {
    scale: 1.4,
  },
  to: {
    scale: 1,
    transition,
  },
});

export { moveIn, scaleIn, type MotionProps };
