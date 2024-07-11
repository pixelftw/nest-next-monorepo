export const keyframes = {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  enterFromRight: {
    from: { opacity: "0", transform: "translateX(200px)" },
    to: { opacity: "1", transform: "translateX(0)" },
  },
  enterFromLeft: {
    from: { opacity: "0", transform: "translateX(-200px)" },
    to: { opacity: "1", transform: "translateX(0)" },
  },
  exitToRight: {
    from: { opacity: "1", transform: "translateX(0)" },
    to: { opacity: "0", transform: "translateX(200px)" },
  },
  exitToLeft: {
    from: { opacity: "1", transform: "translateX(0)" },
    to: { opacity: "0", transform: "translateX(-200px)" },
  },
  scaleIn: {
    from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
    to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
  },
  scaleOut: {
    from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
    to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
  },
  fadeIn: {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  fadeOut: {
    from: { opacity: "1" },
    to: { opacity: "0" },
  },
};
