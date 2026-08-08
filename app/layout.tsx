import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swarnim Mandal — Software Engineer & ML Researcher",
  description:
    "MSc Software Engineering, University of West London. Full-stack developer and machine learning engineer based in London, UK.",
  keywords:
    "Swarnim Mandal, Software Engineer, Full-Stack Developer, Machine Learning, AI, Data Analysis, Python, React, Django, TensorFlow, London",
  authors: [{ name: "Swarnim Mandal" }],
  openGraph: {
    title: "Swarnim Mandal — Software Engineer & ML Researcher",
    description:
      "Full-stack developer and machine learning engineer based in London, UK.",
    url: "https://swarnimmandal.me",
    siteName: "Swarnim Mandal",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
