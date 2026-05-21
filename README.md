# Swarnim Mandal — Portfolio

Personal portfolio and professional site — **[swarnimmandal.me](https://swarnimmandal.me)**

Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Pages

| Route | Description |
|---|---|
| `/` | Hero, expertise areas, selected projects, testimonials |
| `/about` | Background, education, skills, experience |
| `/services` | Full project showcase |
| `/blog` | Technical writing (data in `lib/blog.ts`) |
| `/contact` | Contact form and direct links |
| `/grace` | Grace marketplace page |

## Running locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project structure

```
app/           # Next.js App Router pages
components/    # Header, Footer, animation wrappers (FadeIn, Stagger*)
lib/           # blog.ts — blog post data
public/        # Static assets (swarnim.jpg, background.jpg)
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
