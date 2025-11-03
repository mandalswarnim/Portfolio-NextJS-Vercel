import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Swarnim Mandal - Full-Stack Developer & ML Engineer",
  description: "MSc Software Engineering student at University of West London. Experienced Full-Stack Developer, Machine Learning Engineer, and Data Analyst based in London, UK.",
  keywords: "Swarnim Mandal, Software Engineer, Full-Stack Developer, Machine Learning, AI, Data Analysis, Python, React, Django, TensorFlow, PyTorch, London",
  authors: [{ name: "Swarnim Mandal" }],
  openGraph: {
    title: "Swarnim Mandal - Full-Stack Developer & ML Engineer",
    description: "MSc Software Engineering student with expertise in full-stack development, machine learning, and data analysis",
    url: "https://swarnimmandal.me",
    siteName: "Swarnim Mandal Portfolio",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
