import { NextResponse, after } from "next/server";
import { CONTACT_EMAIL } from "@/lib/site";

// Delivers contact-form submissions via the Resend REST API.
//
// Env:
//   RESEND_API_KEY  required
//   CONTACT_FROM    optional sender, e.g. "Swarnim Mandal <hello@swarnimmandal.me>".
//                   Needs a domain verified in Resend. When set, the sender also
//                   gets an acknowledgement email; when unset, only the owner is
//                   notified via Resend's shared onboarding address.

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };
const MIN_FILL_MS = 3000; // bots submit instantly
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_DETAILS = 10;
const MAX_DETAIL_LEN = 200;

type Payload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // honeypot
  startedAt?: number;
  details?: Record<string, unknown>; // extra labelled fields, e.g. from the receptionist enquiry form
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

async function sendEmail(body: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(req: Request) {
  let data: Partial<Payload>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam traps: pretend success so bots don't retry.
  if (data.website || (data.startedAt && Date.now() - data.startedAt < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    subject: String(data.subject ?? "").trim(),
    message: String(data.message ?? "").trim(),
  };

  for (const [key, value] of Object.entries(fields) as [keyof typeof LIMITS, string][]) {
    if (!value || value.length > LIMITS[key]) {
      return NextResponse.json({ error: `Please check the ${key} field.` }, { status: 400 });
    }
  }
  if (!EMAIL_RE.test(fields.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const details = Object.entries(data.details ?? {})
    .slice(0, MAX_DETAILS)
    .map(([k, v]) => [k.slice(0, 50), String(v ?? "").trim().slice(0, MAX_DETAIL_LEN)] as const)
    .filter(([, v]) => v);

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: `The form is unavailable right now — please email ${CONTACT_EMAIL}.` },
      { status: 500 },
    );
  }

  const from = process.env.CONTACT_FROM;
  const safe = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, escapeHtml(v)]),
  ) as typeof fields;

  try {
    await sendEmail({
      from: from || "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: fields.email,
      subject: `[swarnimmandal.me] ${fields.subject}`,
      text: `From: ${fields.name} <${fields.email}>\n${details.map(([k, v]) => `${k}: ${v}\n`).join("")}\n${fields.message}`,
      html: `<p><strong>From:</strong> ${safe.name} &lt;${safe.email}&gt;</p>
<p><strong>Subject:</strong> ${safe.subject}</p>
${details.map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</p>`).join("\n")}
<hr />
<p style="white-space:pre-wrap">${safe.message}</p>`,
    });
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json(
      { error: `Something went wrong — please email ${CONTACT_EMAIL} directly.` },
      { status: 502 },
    );
  }

  // Acknowledgement is best-effort; the owner already has the message.
  if (from) {
    after(() =>
      sendEmail({
        from,
        to: [fields.email],
        reply_to: CONTACT_EMAIL,
        subject: "Thanks for getting in touch",
        text: `Hi ${fields.name},\n\nThanks for your message — I've received it and will reply within 24 hours.\n\nFor reference, you wrote:\n\n> ${fields.message.replace(/\n/g, "\n> ")}\n\n— Swarnim Mandal\nhttps://swarnimmandal.me`,
      }).catch((err) => console.error("[contact] acknowledgement failed", err)),
    );
  }

  return NextResponse.json({ ok: true });
}
