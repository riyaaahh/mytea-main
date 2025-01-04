/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust paths to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        fa: ['"Font Awesome 5 Free"', 'sans-serif'], // Add Font Awesome font
        faSolid: ['"Font Awesome 5 Free Solid"', 'sans-serif'], // Font Awesome Solid
        faBrands: ['"Font Awesome 5 Brands Regular"', 'sans-serif'],
      },
      colors: {
        'selective-yellow': {
          '50': '#FFFDF2',
          '100': '#FFFBE6',
          '200': '#FCF2BD',
          '300': '#FCEA97',
          '400': '#FAD24D',
          '500': '#f8b802',
          '600': '#DE9C02',
          '700': '#BA7A02',
          '800': '#945701',
          '900': '#703C00',
          '950': '#472100',
        },
      },
    },
  },
  plugins: [],
};