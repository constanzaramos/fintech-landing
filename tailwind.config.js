/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
  colors: {
    primary: {
      900: '#00331E',
      800: '#005733',
      700: '#00804A',
      600: '#00E5C',
      500: '#00D17A',
      400: '#03FF94',
      300: '#6AFFC1',
      200: '#99FFD5',
      100: '#C2FFE5',
      50:  '#EBFFF7',
    },
    secondary: {
      900: '#002433',
      800: '#004766',
      700: '#006B99',
      600: '#008FCC',
      500: '#00B2FF',
      400: '#3CC2FF',
      300: '#66D0FF',
      200: '#99E1FF',
      100: '#CCF0FF',
      50:  '#E5F7FF',
    },
    neutral: {
      900: '#121212',
      800: '#2A2A2A',
      700: '#414141',
      600: '#595959',
      500: '#808080',
      400: '#A0A0A0',
      300: '#B8B8B8',
      200: '#D0D0D0',
      100: '#E7E7E7',
      50:  '#EEEEEE',
      0:   '#FFFFFF'
    },
  },
  fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      graphie: ['Graphie', 'sans-serif'],
    },
},

      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
