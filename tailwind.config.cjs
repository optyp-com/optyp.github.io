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
          500: '#3CB592', // main brand green (legacy)
          600: '#38B490',
          700: '#2F9E7F',
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

        /* New accents for neon glass theme (match global.css tokens) */
        accent: {
          50: '#E6FFF8',
          100: '#BFFCF0',
          200: '#99FBEB',
          300: '#4FF8DE',
          400: '#1FFEE0',
          500: '#00FFD1', // primary neon cyan (accent-1)
          600: '#00E6B8',
          700: '#00C99B',
          800: '#00A37D',
          900: '#007A5B',
        },

        coral: {
          50: '#FFF0EE',
          100: '#FFD8D3',
          200: '#FFBFB9',
          300: '#FF9F8F',
          400: '#FF856E',
          500: '#FF7A6B', // warm coral (accent-2)
          600: '#FF6B5C',
          700: '#E65A4C',
          800: '#B4493C',
          900: '#8A382E',
        },

        skyAccent: {
          50: '#F0FAFF',
          100: '#DDF4FF',
          200: '#C0EFFF',
          300: '#9FE6FF',
          400: '#7EDAFF',
          500: '#6ED0FF', // accent-3 soft blue
          600: '#5CC2FF',
          700: '#37A9FF',
          800: '#2788D9',
          900: '#1E5F9F',
        },
      },

      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      letterSpacing: {
        'wide-heading': '0.12em',
      },

      boxShadow: {
        glass: '0 4px 30px rgba(0,0,0,0.12)',
        smooth: '0 8px 20px rgba(0,0,0,0.08)',
        glow: '0 0 20px rgba(60,181,146,0.25)',
        neon: '0 8px 40px rgba(0,255,204,0.08), 0 0 60px rgba(0,255,204,0.06)',
        glassGlow: '0 18px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0,255,204,0.06)',
      },

      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '10px',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(60,181,146,0.5)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(60,181,146,0.28)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },

      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        pulseGlow: 'pulseGlow 2s infinite',
        float: 'float 6s ease-in-out infinite',
      },

      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(3,7,11,1), rgba(7,10,12,1))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
      },

      /* small utilities */
      transitionTimingFunction: {
        'soft': 'cubic-bezier(.2,.9,.2,1)',
      },

      /* small screens adjustments (if needed) */
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
};
