"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

// ─── Scroll-reveal helper ─────────────────────────────────────────────────────
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const categories = [
  { name: "Copywriting", icon: "✍️", count: "120+ services" },
  { name: "Graphic Design", icon: "🎨", count: "200+ services" },
  { name: "Web Development", icon: "💻", count: "180+ services" },
  { name: "Tutoring", icon: "📚", count: "90+ services" },
  { name: "Student Products", icon: "🛍️", count: "150+ products" },
  { name: "Digital Services", icon: "⚡", count: "110+ services" },
];

const listings = [
  { initial: "A", name: "Alex M.", category: "Web Dev", service: "Build your React or Next.js website", rating: 4.9, reviews: 42, price: 50 },
  { initial: "P", name: "Priya S.", category: "Design", service: "Professional logo & brand identity design", rating: 5.0, reviews: 31, price: 30 },
  { initial: "J", name: "Jake T.", category: "Writing", service: "SEO-optimised blog posts & copywriting", rating: 4.8, reviews: 67, price: 20 },
  { initial: "S", name: "Sara K.", category: "Tutoring", service: "Maths & Physics tutoring (GCSE / A-Level)", rating: 4.9, reviews: 28, price: 25 },
  { initial: "L", name: "Liam O.", category: "Video", service: "Short-form video editing for social media", rating: 4.7, reviews: 55, price: 35 },
  { initial: "M", name: "Mei L.", category: "Digital", service: "Social media management & strategy", rating: 5.0, reviews: 19, price: 40 },
];

const testimonials = [
  {
    name: "James R.",
    role: "Startup Founder",
    content: "Found an incredible student developer on Grace who built our MVP in two weeks. The quality was outstanding at a fraction of agency prices.",
  },
  {
    name: "Fatima A.",
    role: "MSc Computer Science, UCL",
    content: "Grace gave me a platform to showcase my skills while studying. I earned enough to cover my rent while building a real portfolio.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GracePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] flex items-center border-b border-divider">
        <div className="max-w-6xl mx-auto px-6 w-full py-20">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
                Student-Powered Marketplace · Open to all
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] mb-7">
                Built by students.<br />Powered by ambition.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-10 max-w-[520px]">
                Grace is the marketplace where student talent meets real opportunity. Hire motivated freelancers, buy creative products, and discover affordable quality — all student-made.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#marketplace"
                  className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="#join"
                  className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors"
                >
                  Join as Student
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-divider">
              {[
                { number: "500+", label: "Student Freelancers" },
                { number: "1,200+", label: "Services Listed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "0%", label: "Commission — First 5" },
              ].map((stat) => (
                <div key={stat.label} className="px-8 py-6 first:pl-0 last:pr-0">
                  <p className="font-serif text-4xl font-bold text-foreground mb-1">{stat.number}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">The Problem</h2>
          </Reveal>
          <div className="divide-y divide-divider border-t border-divider">
            {[
              {
                num: "01",
                title: "Students are left behind",
                desc: "Existing freelancing platforms are overcrowded with professionals. Students lack visibility, have no portfolio, and struggle to find real-world opportunities during their studies.",
              },
              {
                num: "02",
                title: "Businesses pay too much",
                desc: "Agency rates are prohibitive for small teams and startups. Finding affordable, quality talent is hard — and student creators rarely get the exposure they deserve.",
              },
              {
                num: "03",
                title: "No dedicated space for student talent",
                desc: "There is no focused platform that curates student work, nurtures emerging talent, and connects them with businesses that value fresh, creative, portfolio-driven output.",
              },
            ].map((item) => (
              <Reveal key={item.num}>
                <div className="grid md:grid-cols-[64px_1fr_2fr] items-start gap-6 py-8 hover:bg-surface/60 transition-colors px-2 -mx-2 rounded-lg">
                  <span className="text-xs font-mono text-subtle pt-0.5">{item.num}</span>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="border-t border-divider" />
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">How Grace solves this</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🛒", title: "Dedicated Marketplace", desc: "A focused platform built exclusively for student freelancers and creators." },
              { icon: "💎", title: "Verified Quality", desc: "Curated student listings with ratings, reviews, and transparent pricing." },
              { icon: "🌐", title: "Portfolio Ecosystem", desc: "Build a public profile and let your work speak louder than your CV." },
              { icon: "💼", title: "Real Experience", desc: "Earn income and gain professional experience while you study." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex flex-col bg-background rounded-2xl p-6 border border-divider hover:border-foreground/20 hover:shadow-md transition-all h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMISSION MODEL ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Zero commission to start</h2>
            <p className="text-lg text-muted mb-16 max-w-xl">
              We earn trust before we earn revenue. Start for free, grow on your terms.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {/* Free tier */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-8 border-2 border-primary/30 bg-primary/5 h-full">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 block">
                  First 5 listings
                </span>
                <p className="font-serif text-6xl font-bold text-foreground mb-1">0%</p>
                <p className="text-sm text-muted mb-6">Commission — keep every pound you earn</p>
                <ul className="space-y-3">
                  {[
                    "List up to 5 services or products",
                    "Keep 100% of what you earn",
                    "Full marketplace access",
                    "Student profile & portfolio page",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {/* Growth tier */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl p-8 border border-divider bg-surface h-full">
                <span className="text-xs font-semibold text-subtle uppercase tracking-wider mb-4 block">
                  6th listing onward
                </span>
                <p className="font-serif text-6xl font-bold text-foreground mb-1">10%</p>
                <p className="text-sm text-muted mb-6">Revenue commission — still among the lowest anywhere</p>
                <ul className="space-y-3">
                  {[
                    "Unlimited listings",
                    "Platform marketing & promotion",
                    "Priority customer support",
                    "Advanced analytics dashboard",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-subtle">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PREMIUM PLAN ──────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Student Premium</h2>
            <p className="text-lg text-muted mb-16 max-w-xl">
              Supercharge your presence and let Grace market your services for you.
            </p>
          </Reveal>
          <div className="max-w-xl">
            <Reveal>
              <div className="rounded-2xl p-10 border border-divider bg-background">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">Student Premium</p>
                  <span className="text-xs font-semibold text-background bg-primary px-3 py-1 rounded-full uppercase tracking-wide">
                    7-day free trial
                  </span>
                </div>
                <div className="flex items-end gap-1 mb-8">
                  <span className="font-serif text-5xl font-bold text-foreground">£9</span>
                  <span className="mb-1.5 text-sm text-subtle">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: "⭐", text: "Featured listings at the top of search results" },
                    { icon: "📣", text: "Active marketing of your services to buyers" },
                    { icon: "👁️", text: "Boosted profile visibility across the platform" },
                    { icon: "📊", text: "Promoted placement for better reach" },
                    { icon: "🎁", text: "7-day free trial — no card required to start" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="shrink-0 mt-0.5">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-foreground text-background text-sm font-medium py-3 rounded-full hover:bg-foreground/80 transition-colors">
                  Start Free Trial
                </button>
                <p className="text-center text-xs text-subtle mt-3">Cancel anytime. No commitment.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────────────────── */}
      <section id="marketplace" className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground">Browse Categories</h2>
              <a href="#listings" className="text-sm text-primary hover:underline underline-offset-4">
                All services →
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.05}>
                <div className="flex flex-col bg-surface rounded-2xl p-6 border border-divider hover:border-foreground/20 hover:shadow-md transition-all cursor-pointer group">
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-subtle">{cat.count}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY STUDENTS ──────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">Why hire students?</h2>
          </Reveal>
          <div className="divide-y divide-divider border-t border-divider">
            {[
              { num: "01", title: "Fresh creativity", desc: "Students bring new perspectives unbounded by corporate convention — genuinely original output." },
              { num: "02", title: "Portfolio-driven work ethic", desc: "Every project is a career milestone. Students give it everything because their reputation depends on it." },
              { num: "03", title: "Affordable, fair rates", desc: "Professional quality at student-friendly pricing — without compromising on the result." },
              { num: "04", title: "Fast learners & communicators", desc: "Digital natives who adapt quickly to new tools and respond promptly throughout every project." },
              { num: "05", title: "High motivation", desc: "Driven to prove themselves and grow their reputation. That ambition shows in the work." },
            ].map((item) => (
              <Reveal key={item.num}>
                <div className="grid md:grid-cols-[64px_1fr_2fr] items-start gap-6 py-8 hover:bg-background/60 transition-colors px-2 -mx-2 rounded-lg">
                  <span className="text-xs font-mono text-subtle pt-0.5">{item.num}</span>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="border-t border-divider" />
        </div>
      </section>

      {/* ── LISTINGS SHOWCASE ─────────────────────────────────────────── */}
      <section id="listings" className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground">Top student services</h2>
              <span className="text-sm text-subtle">Mock listings</span>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="flex flex-col bg-surface rounded-2xl border border-divider hover:border-foreground/20 hover:shadow-md transition-all h-full cursor-pointer group overflow-hidden">
                  {/* Category band */}
                  <div className="h-28 flex items-center justify-center bg-divider text-subtle text-2xl font-bold tracking-wider select-none border-b border-divider">
                    {l.category}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shrink-0">
                        {l.initial}
                      </div>
                      <span className="text-sm font-medium text-foreground">{l.name}</span>
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full border border-divider text-subtle bg-background">
                        {l.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-4 flex-1 leading-snug group-hover:text-primary transition-colors">
                      {l.service}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-divider">
                      <div className="flex items-center gap-1 text-xs text-muted">
                        <span className="text-primary">★</span>
                        <span className="font-medium text-foreground">{l.rating}</span>
                        <span>({l.reviews})</span>
                      </div>
                      <div className="text-xs text-subtle">
                        From <span className="font-semibold text-foreground">£{l.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">What people say</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-16">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <blockquote>
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <footer>
                    <span className="block font-medium text-foreground text-sm">{t.name}</span>
                    <span className="text-sm text-muted">{t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section id="join" className="py-28 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Ready to join<br />the movement?
              </h2>
              <p className="text-muted text-lg mb-10">
                Whether you&apos;re a student ready to monetise your skills, or a business looking for affordable talent — Grace is for you. First 5 listings are completely free.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors">
                  Join as a Student — It&apos;s Free
                </button>
                <button className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors">
                  Hire a Student
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GRACE FOOTER ──────────────────────────────────────────────── */}
      <footer className="border-t border-divider bg-background">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            <div className="col-span-2 md:col-span-1">
              <p className="font-serif font-bold text-xl text-foreground mb-4">Grace</p>
              <p className="text-sm text-muted leading-relaxed max-w-[200px]">
                Student-powered freelancing and product marketplace.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">Platform</h4>
              <ul className="space-y-3">
                {["Browse Services", "Join as Student", "Premium Plan", "How It Works"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">Company</h4>
              <ul className="space-y-3">
                {["About Grace", "Contact Us", "Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-5">Connect</h4>
              <ul className="space-y-3">
                {["Instagram", "Twitter / X", "LinkedIn", "Email"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-subtle">&copy; {new Date().getFullYear()} Grace Marketplace. All rights reserved.</p>
            <p className="text-sm text-subtle">A student initiative.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
