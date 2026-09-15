"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  /** One entry per visual line. Each line slides up out of a clipped mask. */
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p";
}

/**
 * Editorial masked headline reveal — each line rises out of its own
 * overflow-hidden wrapper with a staggered delay.
 */
export default function TextReveal({
  lines,
  className = "",
  delay = 0,
  stagger = 0.12,
  as: Tag = "h1",
}: TextRevealProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
