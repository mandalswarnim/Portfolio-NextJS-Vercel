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
        primary: "#d4a574",
        secondary: "#6b8eb5",
        accent: "#c9a870",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'renaissance': "url('/background.jpg')",
      },
    },
  },
  plugins: [],
}
