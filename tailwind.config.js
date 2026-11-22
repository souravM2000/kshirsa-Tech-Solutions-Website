/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#F4FCF9',
          100: '#E5F8F2',
          200: '#C2EFE1',
          300: '#8EE1C7',
          400: '#4ECBAB',
          500: '#00B887', // Primary Brand Accent
          600: '#009B71',
          700: '#007C5B',
          800: '#006B4F', // Deep Brand Green
          900: '#004D3B', // Dark Emerald
          950: '#002E23', // Midnight Emerald
        },
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
        navy: {
          900: '#092D3A', // Primary Text Dark Navy
          950: '#051A22',
        },
        mint: {
          50: '#F4FCF9',
          100: '#E5F8F2',
          200: '#D2F5EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 77, 59, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 16px 36px -4px rgba(0, 184, 135, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'card-emerald': '0 8px 30px -4px rgba(0, 77, 59, 0.12)',
        'button-glow': '0 4px 16px 0 rgba(0, 184, 135, 0.38)',
        'glow-emerald': '0 0 36px 8px rgba(0, 184, 135, 0.24)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.04)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 38s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
