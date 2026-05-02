import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export const metadata: Metadata = {
  title: "Work — Swarnim Mandal",
  description: "Projects, services, and open-source work by Swarnim Mandal.",
};

const projects = [
  {
    category: "Deep Learning",
    title: "Guitar Tablature Generation",
    desc: "LSTM and feed-forward neural network that predicts optimal guitar tablatures for any input melody — modelling musical intention and fretting difficulty from training data probabilities.",
    tech: ["Python", "TensorFlow", "Keras"],
    link: "https://github.com/mandalswarnim",
  },
  {
    category: "Machine Learning",
    title: "Heart Disease Prediction",
    desc: "Logistic regression model predicting heart disease likelihood in COVID-19 patients, using clinical and demographic factors including age, smoking status, and cholesterol levels.",
    tech: ["Python", "Scikit-Learn", "Seaborn", "Matplotlib"],
    link: "https://github.com/mandalswarnim",
  },
  {
    category: "Deep Learning",
    title: "Music Genre Classification",
    desc: "CNN model classifying audio files into 10 genres using MFCC features extracted from the GTZAN dataset, achieving 79% accuracy with custom preprocessing and normalisation.",
    tech: ["Python", "PyTorch", "Librosa"],
    link: "https://github.com/mandalswarnim",
  },
];

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    desc: "End-to-end web application development using React, Django, and Node.js. Responsive UIs, RESTful APIs, database design, and CI/CD deployment.",
    items: ["React & CSS responsive UIs", "RESTful API design", "Django backend", "CI/CD pipeline deployment"],
  },
  {
    num: "02",
    title: "Machine Learning & AI",
    desc: "Building and deploying neural networks for audio, vision, and tabular data. Experienced with both research-oriented and production ML workflows.",
    items: ["Neural network architecture", "Audio & music processing", "Predictive modelling", "TensorFlow & PyTorch"],
  },
  {
    num: "03",
    title: "Data Analysis",
    desc: "Transforming raw data into business insight. Statistical analysis, predictive models, automated pipelines, and database management.",
    items: ["Automated data extraction", "Statistical analysis", "Predictive models", "Database optimisation"],
  },
  {
    num: "04",
    title: "Mobile Development",
    desc: "Cross-platform mobile applications using Flutter with Node.js or Django backends. UI/UX design through to backend integration.",
    items: ["Flutter cross-platform apps", "UI/UX design", "Node.js backend", "API integration"],
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand your goals, constraints, and the problem worth solving." },
  { step: "02", title: "Planning", desc: "Define scope, architecture, and a realistic roadmap." },
  { step: "03", title: "Development", desc: "Build iteratively with clean, tested, documented code." },
  { step: "04", title: "Delivery", desc: "Deploy, monitor, hand off — and stay available." },
];

export default function Services() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-6">
              Work
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              What I build
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              A selection of projects and the services I offer. From production web apps to
              research-grade machine learning models.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-14">
              Featured Projects
            </h2>
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    View on GitHub <span className="text-xs">↗</span>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="mt-8">
              <a
                href="https://github.com/mandalswarnim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-divider text-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:border-foreground/40 transition-colors"
              >
                All repositories on GitHub ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 border-b border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-14">
              Services
            </h2>
          </FadeIn>

          <StaggerContainer className="divide-y divide-divider border-t border-divider">
            {services.map((svc) => (
              <StaggerItem key={svc.num}>
                <div className="grid md:grid-cols-[64px_1fr_1fr] gap-8 py-10">
                  <span className="text-xs font-mono text-subtle pt-1">{svc.num}</span>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">{svc.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{svc.desc}</p>
                  </div>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-divider shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="border-t border-divider" />
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-14">
              How I work
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {process.map((step) => (
              <StaggerItem key={step.step}>
                <div>
                  <span className="text-xs font-mono text-subtle block mb-4">{step.step}</span>
                  <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                  Ready to start?
                </h2>
                <p className="text-muted">Let&apos;s discuss your project.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors whitespace-nowrap"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
