/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '310px', 'max': '348px'},
        'xxs': {'min': '348px', 'max': '640px'},
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}