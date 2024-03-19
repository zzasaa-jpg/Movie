/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'font-pop': ['Poppins', 'sans-serif'],
      'font-open': ['Open Sans', 'sans-serif'],
    }
  },
  backgroundImage: {
    'hero-pattern': "Images/bg.avif')",
    'lop': "Images/trbg.avif",
    'qwe': "Image/tv.avif",
  },
  plugins: [],
}