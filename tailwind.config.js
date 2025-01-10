/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      backgroundImage: {
        'navBg':  'radial-gradient(9917.17% 140.83% at 0.83% 0%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.15) 100%)',
        bodyBg:' linear-gradient(180deg, #FFF7E7 0%, #FFF1DC 100%)'
      },
      boxShadow: {
        'navShadow': '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
        'testimonialShadow': ' 0px 0px 20px 5px rgba(0, 19, 119, 0.05)'
      },
      fontFamily:{
        raleway:['Raleway', 'sans-serif'],
        oxanium:['Oxanium', 'sans-serif']
      },
       rotate: {
        'rotate': '180deg',
      },

    },
  },
  plugins: [],
}

