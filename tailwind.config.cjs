module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { primary: {500:'#3CB592',600:'#38B490',700:'#2F9E7F'}, gray:{500:'#6B7280',900:'#0F1724'}},
      fontFamily:{heading:['Poppins','sans-serif'],body:['Inter','sans-serif']},
      letterSpacing:{'wide-heading':'0.12em'}
    }
  },
  plugins: []
};
