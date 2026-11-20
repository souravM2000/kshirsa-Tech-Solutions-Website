/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#F4FCF9',
          100: '#E5F8F2',
          200: '#C2EFE1',
          300: '#8EE1C7',
          400: '#4ECBAB',
          500: '#00B887', // Primary Accent
          600: '#009B71',
          700: '#007C5B',
          800: '#006B4F', // Deep Green
          900: '#004D3B', // Dark Emerald
          950: '#002E23',
        },
        navy: {
          900: '#092D3A', // Primary Text / Heading Dark Navy
          950: '#051A22',
        },
        mint: {
          50: '#F4FCF9',
          100: '#E5F8F2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 77, 59, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(0, 184, 135, 0.15), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'button-glow': '0 4px 14px 0 rgba(0, 184, 135, 0.39)',
      }
    },
  },
  plugins: [],
}
