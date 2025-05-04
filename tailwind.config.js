/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#47A1DA',
          dark: '#3B89BC',
        },
        accent: {
          DEFAULT: '#F0E523',
          dark: '#D6CC1F',
        },
      },
    },
  },
  plugins: [],
};