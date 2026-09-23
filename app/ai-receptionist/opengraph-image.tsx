import { OG_SIZE, ogImage } from "@/lib/og";

export const alt = "AI Receptionist — Never miss a call, never lose a booking";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "AI Receptionist",
    title: "Never miss a call. Never lose a booking.",
    subtitle: "Answers the calls you can't and emails you every detail",
  });
}
