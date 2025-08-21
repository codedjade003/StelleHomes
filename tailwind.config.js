/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainlux: ["MAINLUX-SemiBold", "sans-serif"],
      },
      screens: {
        sm: '640px',          // default small
        md: '768px',          // default medium
        lg: '1024px',         // default large
        xl: '1200px',         // your custom 1200px screen
        '2xl': '1536px',      // optional
      },
    },
  },
  plugins: [],
};
