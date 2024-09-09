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
        background: "#FFF7E0",
        foreground: "var(--foreground)",
        primary: "#126741",
        secondary: "#FFEB3B",
      },
    },
  },
  plugins: [],
};
