/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F4",
        foreground: "#1C1612",
        surface: "#F0EBE3",
        divider: "#E2D9CE",
        primary: "#2D5FA3",
        muted: "#6B6259",
        subtle: "#9B9088",
        status: {
          nominal: "#4A7C59",
          warning: "#A8741A",
          critical: "#A63D2F",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
