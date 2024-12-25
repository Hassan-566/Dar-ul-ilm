/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '540px', // Define a custom screen breakpoint
      },
      colors: {
        b3843c: '#b3843c',
      },
    },

  },
  plugins: [aspectRatio],

}

