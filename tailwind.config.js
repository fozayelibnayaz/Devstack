/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        brand: "linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
}