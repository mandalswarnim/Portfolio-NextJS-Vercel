"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

const expertise = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "Building responsive, cross-device web applications using React, Django, and Node.js — from API design to CI/CD deployment.",
  },
  {
    num: "02",
    title: "Machine Learning & AI",
    desc: "Developing neural networks for audio classification, music generation, and predictive modelling using TensorFlow, PyTorch, and Keras.",
  },
  {
    num: "03",
    title: "Data Analysis",
    desc: "Extracting business insight from complex datasets through statistical analysis, predictive models, and automated data pipelines.",
  },
];

type Project = {
  category: string;
  title: string;
  desc: string;
  tech: string[];
  link: string;
  demo?: string;
};

const projects: Project[] = [
  {
    category: "Deep Learning",
    title: "UAV Predictive Maintenance Digital Twin",
    desc: "LSTM, Transformer, and 1D-CNN models forecasting Remaining Useful Life on NASA C-MAPSS turbofans and a synthetic UAV fleet — with an interactive 3D dashboard and explainable-AI diagnostics.",
    tech: ["PyTorch", "Next.js", "Three.js"],
    link: "https://github.com/mandalswarnim",
    demo: "/uav",
  },
  {
    category: "Deep Learning",
    title: "Guitar Tablature Generation",
    desc: "LSTM and feed-forward neural network that predicts optimal guitar tablatures for any input melody, modelling musical intention and fretting difficulty.",
    tech: ["Python", "TensorFlow", "Keras"],
    link: "https://github.com/mandalswarnim",
  },
  {
    category: "Deep Learning",
    title: "Music Genre Classification",
    desc: "CNN model classifying audio into 10 genres using MFCC features, achieving 79% accuracy on the GTZAN dataset with custom preprocessing.",
    tech: ["Python", "PyTorch", "Librosa"],
    link: "https://github.com/mandalswarnim",
  },
];

const testimonials = [
  {
    content:
      "Swarnim is an exceptional professional who brings genuine passion and dedication to everything he undertakes. His commitment to excellence and ability to inspire and uplift his team members makes him an invaluable asset to any project.",
    name: "Adrian Mihail",
    role: "Professional Colleague",
  },
  {
    content:
      "After facing significant academic challenges, Swarnim's patient tutoring and dedication transformed my educational journey. Under his mentorship, I not only passed but gained confidence in both Nepali and Chemistry. His approach made complex subjects accessible.",
    name: "Sudip",
    role: "Former Student",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <FadeIn delay={0}>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
                  Available for opportunities · London, UK
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] mb-7">
                  Building software<br />that thinks ahead.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-muted leading-relaxed mb-10 max-w-[480px]">
                  MSc Software Engineering at University of West London.
                  Full-stack developer and machine learning engineer with
                  production experience across web, mobile, and AI systems.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
                  >
                    View my work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: photo */}
            <FadeIn delay={0.2} direction="left">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-divider">
                  <img
                    src="/swarnim.jpg"
                    alt="Swarnim Mandal"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-background border border-divider rounded-xl px-4 py-3 shadow-sm">
                  <p className="text-xs text-subtle">Currently</p>
                  <p className="text-sm font-medium text-foreground">MSc @ UWL, London</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────── */}
      <section className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">
              Expertise
            </h2>
          </FadeIn>

          <StaggerContainer className="divide-y divide-divider border-t border-divider">
            {expertise.map((item) => (
              <StaggerItem key={item.num}>
                <div className="grid md:grid-cols-[64px_1fr_2fr] items-start gap-6 py-8 hover:bg-surface/60 transition-colors px-2 -mx-2 rounded-lg">
                  <span className="text-xs font-mono text-subtle pt-0.5">{item.num}</span>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="border-t border-divider" />
        </div>
      </section>

      {/* ── Selected Work ────────────────────────────────── */}
      <section className="py-24 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Selected Work
              </h2>
              <Link
                href="/services"
                className="text-sm text-primary hover:underline underline-offset-4"
              >
                All projects →
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="flex flex-col bg-surface rounded-2xl p-6 border border-divider hover:border-foreground/20 hover:shadow-md transition-all h-full">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-medium text-foreground leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-background text-subtle border border-divider px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.demo && (
                      <Link
                        href={project.demo}
                        className="inline-flex items-center bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full hover:bg-foreground/80 transition-colors"
                      >
                        Try me →
                      </Link>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      View on GitHub <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 border-t border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">
              What people say
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-16">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <blockquote>
                  <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <footer>
                    <span className="block font-medium text-foreground text-sm">
                      {t.name}
                    </span>
                    <span className="text-sm text-muted">{t.role}</span>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-28 border-t border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Have a project<br />in mind?
              </h2>
              <p className="text-muted text-lg mb-10">
                Open to full-time roles, freelance projects, and research collaborations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:mswarnim1@gmail.com"
                  className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
                >
                  mswarnim1@gmail.com
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors"
                >
                  About me
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
