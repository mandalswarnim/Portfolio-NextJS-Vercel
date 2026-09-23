"use client";

import { track } from "@vercel/analytics";
import { BOOKING_URL } from "@/lib/site";

// Renders nothing until NEXT_PUBLIC_BOOKING_URL is configured.
export default function BookingButton({
  source,
  label = "Book a call",
  className = "inline-flex items-center gap-1.5 border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors whitespace-nowrap",
}: {
  source: string;
  label?: string;
  className?: string;
}) {
  if (!BOOKING_URL) return null;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("booking_clicked", { source })}
      className={className}
    >
      {label} <span className="text-xs">↗</span>
    </a>
  );
}
