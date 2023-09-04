/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E5E4E2',
        bluetext: '#1B4965'
      }
    },
  },
  plugins: [],
}