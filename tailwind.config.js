/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--dark)',
        mid: 'var(--mid)',
        text: 'var(--text-color)',
        glassmorph: 'var(--card-glassmorph)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
