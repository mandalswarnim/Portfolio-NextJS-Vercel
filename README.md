# Swarnim Mandal - Portfolio Website

A modern, animated portfolio website built with Next.js 15, featuring a Renaissance-inspired design theme with warm golden tones and sophisticated animations.

![Portfolio Preview](public/background.jpg)

## Overview

This portfolio showcases my professional experience, technical skills, and projects as a Software Engineering graduate student and Full-Stack Developer. The website features smooth animations, responsive design, and a unique Renaissance-themed aesthetic that sets it apart from traditional tech portfolios.

## Features

### Design & UX
- **Renaissance-Inspired Theme**: Warm golden color palette with classical art background
- **Smooth Animations**: Framer Motion-powered animations including:
  - Fade-in effects with directional motion
  - Stagger animations for list items
  - Scale and hover interactions
  - Scroll-based triggers
  - Animated gradient text
  - Floating background orbs
- **Glassmorphism Effects**: Modern backdrop blur and semi-transparent elements
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Custom Scrollbar**: Themed scrollbar matching the golden aesthetic

### Content Sections
- **Home**: Hero section with animated introduction and quick stats
- **About**: Detailed education, professional experience, and skills
- **Services**: Showcase of technical capabilities and past projects
- **Blog**: Technical articles and insights (data-driven from lib/blog.ts)
- **Contact**: Professional contact information and form

### Technical Features
- **Server-Side Rendering (SSR)**: Fast initial page loads with Next.js 15
- **TypeScript**: Full type safety across the codebase
- **Standalone Build**: Optimized for deployment on Vercel or other platforms
- **Modern React**: Uses React 19 with latest features
- **Optimized Images**: Next.js Image component for automatic optimization
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **npm** - Package management

## Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Create production build
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

### Project Structure

```
portfolio-nextjs/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog listing and individual posts
│   ├── contact/             # Contact page
│   ├── services/            # Services page
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with header/footer
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── animations/          # Reusable animation components
│   │   ├── FadeIn.tsx      # Fade-in with directional motion
│   │   ├── ScaleIn.tsx     # Scale animation
│   │   ├── StaggerContainer.tsx
│   │   └── StaggerItem.tsx
│   ├── Footer.tsx          # Site footer
│   └── Header.tsx          # Navigation header
├── lib/                     # Utility functions and data
│   └── blog.ts             # Blog post data
├── public/                  # Static assets
│   └── background.jpg      # Renaissance background image
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### Customization

#### Colors
The color theme is defined in two locations:

1. **Tailwind Config** (`tailwind.config.js`)
   ```javascript
   colors: {
     primary: "#d4a574",    // Warm gold
     secondary: "#6b8eb5",  // Classical blue
     accent: "#c9a870",     // Light gold
   }
   ```

2. **Global CSS** (`app/globals.css`)
   ```css
   :root {
     --background: #1a1410;  // Dark brown
     --foreground: #f5f1e8;  // Warm white
     --accent-gold: #d4a574;
     --accent-blue: #6b8eb5;
   }
   ```

#### Background Image
Replace `/public/background.jpg` with your preferred image. The opacity is controlled in `app/globals.css`:
```css
body::before {
  opacity: 0.15; /* Adjust this value */
}
```

#### Content
- **Personal Info**: Update in respective page files
- **Blog Posts**: Modify `lib/blog.ts`
- **Projects**: Update in `app/services/page.tsx`
- **Testimonials**: Update in `app/page.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your Portfolio repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Other Platforms

The project uses standalone output mode, making it compatible with:
- **Netlify**: Use Next.js runtime
- **Railway**: Auto-detects Next.js configuration
- **DigitalOcean App Platform**: Supports Next.js
- **AWS Amplify**: Works with SSR Next.js apps

## Environment Variables

No environment variables are required for basic functionality. If you add features like:
- Contact form backend
- Analytics
- CMS integration

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other variables as needed
```

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Bundle Size**: Minimized with automatic code splitting
- **Image Optimization**: Automatic with Next.js Image component
- **Font Loading**: Optimized with next/font

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

While this is a personal portfolio, suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

**Swarnim Mandal**
- Email: mswarnim1@gmail.com
- Phone: +44-7585345010
- Location: London, United Kingdom
- Website: [Portfolio](https://swarnimmandal.me)

## Acknowledgments

- Renaissance background image inspiration
- Framer Motion for animation capabilities
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first approach

---

Built with passion using Next.js 15 and TypeScript. Deployed on Vercel.
