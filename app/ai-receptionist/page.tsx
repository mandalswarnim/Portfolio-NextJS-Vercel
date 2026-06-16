import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import CallDemo from "@/components/aireception/CallDemo";

export const metadata: Metadata = {
  title: "AI Receptionist — 24/7 Call Answering & Booking Capture",
  description:
    "An AI receptionist that answers every call 24/7, captures customer details through natural conversation, and emails you structured booking requests. Built on Twilio + OpenAI. Get in touch to add it to your business.",
  openGraph: {
    title: "AI Receptionist — Never miss a call, never lose a booking",
    description:
      "A production-ready AI receptionist that answers calls 24/7 and turns them into booking requests in your inbox. Integrate it into your business.",
    url: "https://swarnimmandal.me/ai-receptionist",
    type: "website",
  },
};

const CONTACT_HREF = "/contact";
const EMAIL_HREF =
  "mailto:mswarnim1@gmail.com?subject=AI%20Receptionist%20enquiry&body=Hi%20Swarnim%2C%20I%27d%20like%20to%20add%20the%20AI%20Receptionist%20to%20my%20business.";

const problems = [
  {
    stat: "62%",
    title: "Missed Calls",
    description:
      "of small-business calls go unanswered. Every missed call is a missed opportunity that walks straight to your competitor.",
  },
  {
    stat: "£60K",
    title: "Lost Revenue",
    description:
      "average annual revenue lost per business from missed calls — money you've already spent marketing to attract, gone.",
  },
  {
    stat: "4 hrs",
    title: "Slow Response",
    description:
      "average callback time for a missed call. By then, most customers have already booked with someone else.",
  },
];

const solutions = [
  {
    title: "Answers instantly",
    description:
      "Picks up every call in under a second. No hold music, no voicemail, no missed opportunities — day or night.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Captures every detail",
    description:
      "Name, phone number, reason for calling, preferred time — all captured through natural conversation, not robotic prompts.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Sends structured info",
    description:
      "A clean, organised email lands in your inbox the moment the call ends — ready to confirm, with no data entry needed.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
];

const steps = [
  {
    step: "01",
    title: "Customer calls",
    description:
      "A customer dials your business number. Instead of voicemail or endless ringing, they're greeted by a friendly AI voice.",
  },
  {
    step: "02",
    title: "AI handles it",
    description:
      "The AI has a natural conversation — understands their needs, answers questions, and captures name, number, and booking details.",
  },
  {
    step: "03",
    title: "You get the booking",
    description:
      "Within seconds, a beautifully formatted email lands in your inbox with all the details. Ready to confirm and schedule.",
  },
];

const features = [
  {
    title: "24/7 availability",
    description:
      "Never sleeps, takes breaks, or calls in sick. Every call answered, day or night.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Smart conversations",
    description:
      "Natural-language AI that understands context, handles follow-ups, and adapts to your business.",
    icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  },
  {
    title: "Instant email alerts",
    description:
      "Structured booking details in your inbox the moment a call ends — name, number, time preference, all organised.",
    icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  },
  {
    title: "Easy integration",
    description:
      "Connect your existing phone number in minutes. No new hardware, no complex setup — just forward your calls.",
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Call analytics",
    description:
      "Track call volume, booking rates, peak hours, and more. Understand your customers with real data.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Multi-language",
    description:
      "Serve customers in their preferred language. The AI understands and speaks multiple languages fluently.",
    icon: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495A18.023 18.023 0 0112 15.75",
  },
];

const testimonials = [
  {
    quote:
      "We were losing 30+ calls a week. Within a month of running the AI receptionist, our bookings went up 40%. It pays for itself.",
    name: "Dr. Rachel Kim",
    role: "Owner, Bright Smile Dentistry",
  },
  {
    quote:
      "My clients think they're talking to a real person. The call quality and the booking emails are incredibly professional.",
    name: "James Porter",
    role: "Founder, Porter & Co Law",
  },
  {
    quote:
      "I run a solo practice and can't always answer the phone. This makes sure I never miss a potential client. Game changer.",
    name: "Maria Santos",
    role: "Therapist, Mindful Wellness",
  },
];

const stats = [
  { label: "Calls Today", value: "47", change: "+12%" },
  { label: "Bookings Captured", value: "23", change: "+8%" },
  { label: "Avg Response", value: "0.3s", change: "-45%" },
];

const recentCalls = [
  { name: "Sarah Johnson", time: "2 min ago", status: "Booking sent" },
  { name: "Mike Chen", time: "15 min ago", status: "Details captured" },
  { name: "Emily Davis", time: "1 hr ago", status: "Booking sent" },
];

function Icon({ path }: { path: string }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function AiReceptionistPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-24 md:py-28 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-divider text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                AI-Powered Receptionist · A product by Swarnim Mandal
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] mb-6">
                Never miss a call.
                <br />
                <span className="text-primary">Never lose a booking.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
                An AI receptionist that answers every call 24/7, captures
                customer details through natural conversation, and sends booking
                requests straight to your inbox — so you can focus on running
                your business.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
                >
                  Get in touch to integrate it
                </Link>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors"
                >
                  Email me directly
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Dashboard mockup */}
          <FadeIn delay={0.4}>
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-divider bg-background shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-divider bg-surface">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-status-critical/60" />
                    <span className="w-3 h-3 rounded-full bg-status-warning/60" />
                    <span className="w-3 h-3 rounded-full bg-status-nominal/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="px-4 py-1 rounded-md bg-background border border-divider text-xs text-subtle font-mono">
                      dashboard · ai-receptionist
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-divider p-4"
                      >
                        <p className="text-sm text-subtle">{stat.label}</p>
                        <div className="flex items-end gap-2 mt-1">
                          <p className="text-2xl font-semibold text-foreground">
                            {stat.value}
                          </p>
                          <span className="text-xs font-medium text-status-nominal">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-divider overflow-hidden">
                    <div className="px-4 py-3 bg-surface border-b border-divider">
                      <p className="text-sm font-medium text-foreground">
                        Recent Calls
                      </p>
                    </div>
                    {recentCalls.map((call) => (
                      <div
                        key={call.name}
                        className="flex items-center justify-between px-4 py-3 border-b border-divider last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-surface border border-divider flex items-center justify-center text-sm font-medium text-primary">
                            {call.name[0]}
                          </span>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {call.name}
                            </p>
                            <p className="text-xs text-subtle">{call.time}</p>
                          </div>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-status-nominal/10 text-status-nominal">
                          {call.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-status-critical uppercase tracking-widest mb-3">
              The Problem
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">
              Every missed call costs you money
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <StaggerItem key={problem.title}>
                <div className="h-full rounded-2xl border border-divider bg-surface p-8">
                  <p className="font-serif text-4xl font-bold text-status-critical mb-2">
                    {problem.stat}
                  </p>
                  <h3 className="font-medium text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Solution ─────────────────────────────────────── */}
      <section className="py-24 border-b border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              The Solution
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              AI that handles it all for you
            </h2>
            <p className="text-muted text-lg max-w-2xl mb-16">
              From the first ring to the booking confirmation — completely
              automated, beautifully simple.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-divider bg-background p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon path={item.icon} />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Three steps. Zero effort.
            </h2>
            <p className="text-muted text-lg max-w-2xl mb-16">
              Set it up once, and your AI receptionist handles the rest —
              automatically.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <StaggerItem key={step.step}>
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-white font-serif text-xl font-bold mb-5">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────── */}
      <section className="py-24 border-b border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Features
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-muted text-lg max-w-2xl mb-16">
              Built for businesses that want to capture every opportunity
              without adding complexity.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-2xl border border-divider bg-background p-7">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon path={feature.icon} />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Live Demo ────────────────────────────────────── */}
      <section className="py-24 border-b border-divider">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Live Preview
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              See it in action
            </h2>
            <p className="text-muted text-lg max-w-2xl mb-16">
              Here&apos;s what a real call sounds like — natural, helpful, and
              professional, every single time.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CallDemo />
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="py-24 border-b border-divider bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-16">
              Loved by businesses
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="h-full rounded-2xl border border-divider bg-background p-8">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-status-warning fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Built on Twilio · OpenAI · Node.js
              </p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Want this on
                <br />
                your business?
              </h2>
              <p className="text-muted text-lg mb-10">
                I build, deploy, and integrate the AI receptionist into your
                existing phone line and workflow. Get in touch and let&apos;s set
                it up for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={CONTACT_HREF}
                  className="inline-flex items-center bg-foreground text-background text-sm font-medium px-6 py-3 rounded-full hover:bg-foreground/80 transition-colors"
                >
                  Get in touch
                </Link>
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center border border-divider text-foreground text-sm font-medium px-6 py-3 rounded-full hover:border-foreground/40 transition-colors"
                >
                  mswarnim1@gmail.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
