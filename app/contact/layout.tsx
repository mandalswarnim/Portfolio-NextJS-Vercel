import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact — Swarnim Mandal",
  description:
    "Get in touch about full-time roles, freelance projects, research collaborations or the AI Receptionist.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
