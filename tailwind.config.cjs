/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "movie-black": "#1d2024",
        "movie-black-200": "#1f2326",
        "orange": "#f37515",
      },
      rotate: {
        270: '270deg'
      }
    },
  },
  plugins: [],
}
