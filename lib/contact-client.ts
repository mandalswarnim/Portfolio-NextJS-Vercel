import { CONTACT_EMAIL } from "@/lib/site";

export type EnquiryPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot
  startedAt: number;
  details?: Record<string, string>;
};

// Posts to /api/contact; throws an Error carrying a user-facing message.
export async function submitEnquiry(payload: EnquiryPayload) {
  const fallback = `Something went wrong — please email ${CONTACT_EMAIL}.`;
  let res: Response;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(fallback);
  }
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || fallback);
  }
}
