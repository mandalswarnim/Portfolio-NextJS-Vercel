# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (auto-picks available port if 3000 is in use)
npm run build      # Production build — must pass before pushing
npm run lint       # ESLint check
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v3** for styling
- **Framer Motion** for animations
- **Three.js / @react-three/fiber + drei** (only on `/uav` routes)
- **Recharts + Zustand** (only on `/uav` routes)
- **Deployed on Vercel** — pushes to `master` auto-deploy to `swarnimmandal.me`

## Architecture

**App Router layout** — `app/layout.tsx` wraps every page with `<Header>` and `<Footer>`, adds 80px top padding via `pt-20` to clear the fixed header.

**Pages:** `app/page.tsx` (home), `app/about/`, `app/services/`, `app/contact/`, `app/blog/`, `app/blog/[slug]/`, `app/uav/` (UAV predictive-maintenance dashboard, see below), `app/ai-receptionist/` (sales landing page for the AI Receptionist product — content ported from the gitignored `Reception App/` Twilio+OpenAI app; interactive call demo in `components/aireception/CallDemo.tsx`)

**Blog data** lives entirely in `lib/blog.ts` as a hardcoded array of `BlogPost` objects — no CMS or database. To add a post, append to `blogPosts`. The slug drives the URL.

**Animation components** in `components/animations/` (`FadeIn`, `StaggerContainer`, `StaggerItem`) are thin framer-motion wrappers used across all pages. All are `"use client"` components and can be imported into server component pages.

**SM Monogram** (`components/SMMonogram.tsx`) — animated SVG logo used in Header and Footer. Steel-blue arc (`#2D5FA3`) animates on mount via `strokeDashoffset`.

**UAV dashboard (`/uav`)** — light-theme port of a standalone thesis project (ARES PdM). Five routes (`/uav`, `/uav/armory`, `/uav/mission`, `/uav/diagnostics`, `/uav/lab`) sharing `app/uav/layout.tsx` (mounts `AppBootstrap` + `UavNav` tab row). Components in `components/uav/`, state/fetchers in `lib/uav/` (Zustand store reads baked JSON from `public/uav/data/`). Three.js components are loaded with `dynamic(..., { ssr: false })` from `'use client'` pages, confining their bundle weight to `/uav` routes. Client-side procedural simulation only — there is intentionally no inference backend. `lib/uav/palette.ts` mirrors the Tailwind status colors for canvas/Three.js/chart code; keep the two in sync.

## Design System

Colours are defined as direct hex values in `tailwind.config.js` (not CSS variables):

| Token | Hex | Usage |
|---|---|---|
| `background` | `#FAF8F4` | Page background |
| `foreground` | `#1C1612` | Body text |
| `surface` | `#F0EBE3` | Cards, alternate sections |
| `divider` | `#E2D9CE` | Borders, `<hr>`-style lines |
| `primary` | `#2D5FA3` | Steel blue — SM monogram, links, category labels |
| `muted` | `#6B6259` | Secondary text |
| `subtle` | `#9B9088` | Tertiary text, labels |
| `status.nominal` | `#4A7C59` | UAV dashboard — healthy |
| `status.warning` | `#A8741A` | UAV dashboard — degrading |
| `status.critical` | `#A63D2F` | UAV dashboard — critical |

Fonts loaded via `next/font/google` in `app/layout.tsx`:
- `--font-playfair` → `font-serif` (headings)
- `--font-inter` → `font-sans` (body, default)

## Known Gaps (planned next patch)

- **Contact form is fake** — simulates submission with a timeout. Planned: wire up Resend API (`app/api/contact/route.ts`) to deliver to `mswarnim1@gmail.com`.
- **Project GitHub links** in `app/page.tsx` and `app/services/page.tsx` point to the profile root (`github.com/mandalswarnim`) — update with specific repo URLs.
- **Hero photo** served from `public/swarnim.jpg` as a plain `<img>` with `grayscale` CSS filter — no `next/image` optimisation applied yet.
- **Missing icons** — `app/manifest.ts` references `icon-192.png`/`favicon` assets that don't exist in `public/`, causing site-wide 404s for them.
