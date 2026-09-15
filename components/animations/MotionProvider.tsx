"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/** Respects the OS "reduce motion" preference for every framer-motion animation. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
