/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F8F2',
          100: '#C1F0E0',
          200: '#99E6CC',
          300: '#66D9B2',
          400: '#4DCCA3',
          500: '#3CB592', // main brand green
          600: '#38B490', // darker hover shade
          700: '#2F9E7F', // deepest brand tone
          800: '#257A62',
          900: '#195547',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#0F1724',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // headings
        body: ['Inter', 'sans-serif'],      // body text
      },
      letterSpacing: {
        'wide-heading': '0.12em', // consistent tracking for headings
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
        smooth: '0 8px 20px rgba(0, 0, 0, 0.08)',
        glow: '0 0 20px rgba(60, 181, 146, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(60,181,146,0.5)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(60,181,146,0.3)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        pulseGlow: 'pulseGlow 2s infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #3CB592, #2F9E7F)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
      },
    },
  },
  plugins: [],
};
