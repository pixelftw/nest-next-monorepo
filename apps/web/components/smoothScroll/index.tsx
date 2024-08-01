"use client";
import Lenis from "lenis";
import { PropsWithChildren, useEffect } from "react";

export function SmoothScroll({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis();
    let animationFramer: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFramer = requestAnimationFrame(raf);
    }

    animationFramer = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFramer);
  }, []);
  return children;
}
