import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Grace — Student-Powered Marketplace",
  description:
    "The marketplace where student talent meets real opportunity. Hire motivated freelancers, buy creative products, and discover affordable quality — all student-made.",
};

export default function GraceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
