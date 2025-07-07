/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: "#FF6B00",
        celeste: "#00FFFF",
        fondo: "#0a0a0a",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      }
    },
  },
  plugins: [],
}
