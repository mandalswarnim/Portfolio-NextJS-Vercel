import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "Swarnim Mandal — Software Engineer & ML Researcher";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Portfolio",
    title: "Software Engineer & ML Researcher",
    subtitle: "Full-stack development, machine learning and data — London, UK",
  });
}
