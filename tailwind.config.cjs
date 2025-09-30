/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}", // scan all components/pages
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#17a87a", // main green
          dark: "#0b0f11",    // deep neutral
          light: "#7CFF9E",   // neon accent
        },
        accent: {
          DEFAULT: "#7CFF9E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1180px", // matches our container-custom in CSS
        },
      },
      boxShadow: {
        glass: "0 8px 24px rgba(12,20,20,0.06)",
        card: "0 12px 30px rgba(12,20,24,0.08)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // better form elements
    require("@tailwindcss/typography"), // prose classes for content
  ],
};
