/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['dracula', 'light'],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
