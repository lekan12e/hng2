/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      backgroundColor:{
        "sectionbg": "#FFF6E9"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"]
      },
      colors: {
      customGray: 'rgba(59, 56, 58, 0.40)',
      },
      boxShadow: {
      'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      'nav': "2px 2px 9px 0px rgba(0, 0, 0, 0.15)"
      },
      padding:{
        "section-x" :"70px",
        "section-y" :"24px",

      }
    },
  },
  plugins: [],
}

