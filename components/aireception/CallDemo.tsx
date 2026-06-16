"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const transcript = [
  {
    role: "ai" as const,
    text: "Good afternoon! Thank you for calling Sunrise Dental. How can I help you today?",
  },
  {
    role: "caller" as const,
    text: "Hi, I'd like to book a cleaning appointment for next week.",
  },
  {
    role: "ai" as const,
    text: "Of course! I'd be happy to help you schedule that. Could I get your name please?",
  },
  { role: "caller" as const, text: "Sure, it's Sarah Johnson." },
  {
    role: "ai" as const,
    text: "Thank you, Sarah. And what's the best phone number to reach you?",
  },
  { role: "caller" as const, text: "555-0142." },
  {
    role: "ai" as const,
    text: "Perfect. Do you have a preferred day and time next week?",
  },
  {
    role: "caller" as const,
    text: "Tuesday afternoon would be ideal, around 2pm.",
  },
  {
    role: "ai" as const,
    text: "Great choice! I've captured all your details and sent a booking request to Dr. Martinez's office. You'll receive a confirmation call shortly. Is there anything else I can help with?",
  },
  { role: "caller" as const, text: "No, that's perfect. Thank you!" },
  {
    role: "ai" as const,
    text: "You're welcome, Sarah! Have a wonderful day. Goodbye!",
  },
];

export default function CallDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev >= transcript.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8"
    >
      {/* Call transcript */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-3 rounded-2xl border border-divider bg-background shadow-sm overflow-hidden"
      >
        <div className="flex items-center gap-3 px-5 py-3 border-b border-divider bg-surface">
          <span className="w-3 h-3 rounded-full bg-status-nominal animate-pulse" />
          <span className="text-sm font-medium text-muted">
            Live Call — Sunrise Dental
          </span>
          <span className="ml-auto text-xs text-subtle font-mono">00:47</span>
        </div>
        <div className="p-5 space-y-4 h-[420px] overflow-y-auto">
          {transcript.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                msg.role === "caller" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "caller"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-surface text-foreground rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {visibleMessages < transcript.length && isInView && (
            <div className="flex justify-start">
              <div className="bg-surface rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-subtle animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-subtle animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-subtle animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Booking email preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lg:col-span-2 rounded-2xl border border-divider bg-background shadow-sm overflow-hidden h-fit"
      >
        <div className="px-5 py-3 border-b border-divider bg-surface">
          <span className="text-sm font-medium text-muted">Email Sent</span>
        </div>
        <div className="p-5">
          <div className="mb-4">
            <p className="text-xs text-subtle mb-1">To</p>
            <p className="text-sm text-foreground">
              dr.martinez@sunrisedental.com
            </p>
          </div>
          <div className="mb-4">
            <p className="text-xs text-subtle mb-1">Subject</p>
            <p className="text-sm font-medium text-foreground">
              New Booking Request — Sarah Johnson
            </p>
          </div>
          <div className="rounded-xl bg-surface border border-divider p-4 text-sm space-y-2.5">
            <div className="flex justify-between">
              <span className="text-subtle">Name</span>
              <span className="font-medium text-foreground">Sarah Johnson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-subtle">Phone</span>
              <span className="font-medium text-foreground">555-0142</span>
            </div>
            <div className="flex justify-between">
              <span className="text-subtle">Service</span>
              <span className="font-medium text-foreground">
                Dental Cleaning
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-subtle">Preferred</span>
              <span className="font-medium text-foreground">Tue, 2:00 PM</span>
            </div>
            <div className="pt-2 border-t border-divider">
              <span className="text-xs text-status-nominal font-medium">
                Captured automatically by the AI receptionist
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
