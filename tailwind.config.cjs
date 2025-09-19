/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3CB592', // main brand green
          600: '#38B490', // darker hover shade
          700: '#2F9E7F', // deepest brand tone
        },
        gray: {
          500: '#6B7280', // neutral text
          900: '#0F1724', // dark background
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // for headings
        body: ['Inter', 'sans-serif'],      // for paragraphs
      },
      letterSpacing: {
        'wide-heading': '0.12em', // consistent tracking for headings
      },
    },
  },
  plugins: [],
};
