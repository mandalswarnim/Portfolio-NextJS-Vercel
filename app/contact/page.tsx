"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

const contactLinks = [
  {
    label: "Email",
    value: "mswarnim1@gmail.com",
    href: "mailto:mswarnim1@gmail.com",
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
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
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
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Let&apos;s work<br />together
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              Open to full-time roles, freelance projects, and research collaborations.
              I typically respond within 24 hours.
            </p>
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

                  {status === "success" && (
                    <p className="text-sm text-primary">
                      Message sent — I&apos;ll be in touch soon.
                    </p>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
