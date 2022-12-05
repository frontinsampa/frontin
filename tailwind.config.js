module.exports = {
  content: [
    "./pages/**/*.js*",
    "./components/**/*.js*",
    "./slices/**/*.js*",
    './sections/**/*.js*',
  ],
  theme: {
    fontFamily: {
      heading: ['"Roboto Slab"', 'Roboto'],
      body: ['Roboto'],
    },
    colors: {
      red: '#FF685C',
      pink: '#DA83F6',
      yellow: '#FBC54C',
      green: '#7BE473',
      blue: '#58A9F3',
      gray: '#404040',
      white: '#FFFFFF',
      black: '#202020',
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
