// Site-wide settings shared by client and server components.

export const CONTACT_EMAIL = "mswarnim1@gmail.com";

export const SITE_URL = "https://swarnimmandal.me";
export const GITHUB_URL = "https://github.com/mandalswarnim";
export const LINKEDIN_URL = "https://www.linkedin.com/in/swarnim-mandal-678976259/";

// Path of a CV in public/ (e.g. "/Swarnim_Mandal_CV.pdf"). Download links are hidden until set.
export const CV_PATH: string | null = null;

// Cal.com / Calendly link. Booking buttons are hidden until this is set.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || null;

// AI Receptionist sales page. Leave a price null to show "Quote on request".
export const RECEPTIONIST_PRICING: { setupFrom: number | null; monthlyFrom: number | null } = {
  setupFrom: null,
  monthlyFrom: null,
};

// Path or URL of a recorded example call (e.g. "/aireception/sample-call.mp3").
// The audio player is hidden until this is set.
export const SAMPLE_CALL_AUDIO: string | null = null;
