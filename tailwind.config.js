module.exports = {
  purge: {
    enabled : false,
    content :  [ './index.html',
     './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
