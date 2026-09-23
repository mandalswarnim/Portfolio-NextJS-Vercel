"use client";

import { useRef, useState } from "react";
import { track } from "@vercel/analytics";
import FadeIn from "@/components/animations/FadeIn";
import TextReveal from "@/components/animations/TextReveal";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site";

const contactLinks = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Phone",
    value: "+44 7585 345010",
    href: "tel:+447585345010",
  },
  {
    label: "Location",
    value: "London, United Kingdom",
    href: null,
  },
  {
    label: "GitHub",
    value: "github.com/mandalswarnim",
    href: "https://github.com/mandalswarnim",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/swarnim-mandal",
    href: "https://www.linkedin.com/in/swarnim-mandal-678976259/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Something went wrong — please email ${CONTACT_EMAIL}.`);
      setStatus("success");
      track("contact_submitted");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : `Something went wrong — please email ${CONTACT_EMAIL}.`);
    }
  };

  const inputClass =
    "w-full bg-background border border-divider rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Contact
            </p>
            <TextReveal
              lines={["Let’s work", "together"]}
              className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6"
            />
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              Open to full-time roles, freelance projects, and research collaborations.
              I typically respond within 24 hours.
            </p>
            {BOOKING_URL && (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("booking_clicked", { source: "contact" })}
                className="mt-8 inline-flex items-center gap-1.5 bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
              >
                Book a 20-minute call <span className="text-xs">↗</span>
              </a>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

            {/* Left: contact details */}
            <FadeIn>
              <div className="space-y-0 divide-y divide-divider border-t border-b border-divider">
                {contactLinks.map((item) => (
                  <div key={item.label} className="py-5 flex flex-col gap-1">
                    <span className="text-xs text-subtle uppercase tracking-wider">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from people, filled in by bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-subtle uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-subtle uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-subtle uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    maxLength={200}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-subtle uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    rows={7}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 disabled:opacity-50 transition-colors"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>

                  <p role="status" aria-live="polite" className="text-sm">
                    {status === "success" && (
                      <span className="text-primary">Message sent — I&apos;ll be in touch soon.</span>
                    )}
                    {status === "error" && <span className="text-status-critical">{error}</span>}
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
