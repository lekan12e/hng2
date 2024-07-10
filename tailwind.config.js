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
      },
      screens: {
        'sm': '370px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s forwards',
        slideOutLeft: 'slideOutLeft 0.5s forwards',
      },
    },
  },
  plugins: [],
}

