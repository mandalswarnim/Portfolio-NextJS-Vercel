import Image from "next/image";
import athena from "@/public/athena.png";

/**
 * Athena logo mark — used in Header and Footer.
 * Source art is portrait (402x572), so height drives the size and
 * width follows from the intrinsic aspect ratio.
 */
export default function AthenaMark({ height = 44 }: { height?: number }) {
  return (
    <Image
      src={athena}
      alt="Swarnim Mandal"
      height={height}
      width={Math.round(height * (athena.width / athena.height))}
      priority
      className="w-auto"
      style={{ height }}
    />
  );
}
