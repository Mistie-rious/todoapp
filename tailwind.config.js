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
        bluetext: '#32127A',
        button: '#91A3B0'
      }
    },
  },
  plugins: [],
}