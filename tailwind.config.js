/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'cardshadow': '0px 0px 10px 2px rgb(182, 234, 218, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
