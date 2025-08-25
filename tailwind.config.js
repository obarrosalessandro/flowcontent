/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'flow-green': '#2ECC71',
        'flow-green-dark': '#27AE60',
        'flow-green-darker': '#219653',
      }
    },
  },
  plugins: [],
}