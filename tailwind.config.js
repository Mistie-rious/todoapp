/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#8C92AC',
        bluetext: '#E6E6FA',
        button: '#91A3B0'
      }
    },
  },
  plugins: [],
}