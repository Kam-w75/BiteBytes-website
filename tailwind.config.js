/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#508D86',
          dark: '#343D52',
          light: '#A8C4C0',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
        }
      }
    }
  },
  plugins: [],
}
