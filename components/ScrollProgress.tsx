"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin steel-blue progress line along the bottom edge of the fixed header. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="absolute left-0 bottom-[-1px] h-[2px] w-full origin-left bg-primary"
    />
  );
}
