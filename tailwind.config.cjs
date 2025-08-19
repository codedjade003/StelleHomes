/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainlux: ["MAINLUX-SemiBold", "sans-serif"],
      },
      screens: {
        'xl1220': {'max': '1200px'},
        xl1230: '1200px', // custom screen for 1200px
        'max-sm': { 'max': '639px' },
        'max-sm_2': { 'max': '435px' },
        xl1200: { max: "1271px", min: "1024px" }, // custom screen for <1272px
      },
    },
  },
  plugins: [],
};

