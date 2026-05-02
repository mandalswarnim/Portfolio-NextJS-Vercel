"use client";

import { motion } from "framer-motion";

// Circle circumference at r=17: 2 * π * 17 ≈ 106.8
// Arc sweeps 80% of the circle on load
const CIRCUMFERENCE = 106.8;

export default function SMMonogram({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      aria-label="SM"
    >
      {/* Static background track */}
      <circle
        cx="19"
        cy="19"
        r="17"
        stroke="#E2D9CE"
        strokeWidth="1"
        fill="none"
      />
      {/* Animated arc — steel blue, draws on mount */}
      <motion.circle
        cx="19"
        cy="19"
        r="17"
        stroke="#2D5FA3"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={CIRCUMFERENCE}
        initial={{ strokeDashoffset: CIRCUMFERENCE }}
        animate={{ strokeDashoffset: CIRCUMFERENCE * 0.2 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        transform="rotate(-90 19 19)"
      />
      {/* Monogram text */}
      <text
        x="19"
        y="23"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="600"
        fill="#1C1612"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.8"
      >
        SM
      </text>
    </svg>
  );
}
