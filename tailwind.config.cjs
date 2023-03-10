/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{astro,ts,css}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        bg: "var(--bg)",
      },
    },
  },
  plugins: [],
};
