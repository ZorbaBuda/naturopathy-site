/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontFamily: {
    //   // primary: ['Oswald', 'sans-serif'],
    //   secondary: ['Raleway', 'sans-serif'],
    //   tertiary: ['Rozha One', 'sans-serif'],
    //   oswald: ['var(--font-oswald)', 'sans-serif'],
    //   rozha: ['var(--font-rozha)', 'sans-serif'],
    //   playfair_display: ['var(--font-playfair-display)', 'sans-serif']
    // },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '20px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1536px',
    },
    // colors: {
    //   dark: '#111111',
    //   grey: {
    //     DEFAULT: '#555555',
    //   },
    //  botella: '#026670',
    //  botella_claro: '#9FEDD7',
    //  amarillo_claro: '#FEF9C7',
    //  amarillo_medio: '#FCE181',
    //  gris_claro: '#EDEAE5' 
    // },
    extend: {
      fontFamily: {
        // primary: ['Oswald', 'sans-serif'],
        secondary: ['MANROPE_REGULAR', 'sans-serif'],
        tertiary: ['Rozha One', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        rozha: ['var(--font-rozha)', 'sans-serif'],
        manrope_regular:["manrope-regular",'sans-serif'],
        manrope_semibold:["manrope-semibold",'sans-serif'],
        logo:["logo"],
        open_sans:["open-sans"],
        roboto_regular:["roboto", 'sans-serif']
      },
      colors: {
        dark: '#111111',
        // grey: {
        //   DEFAULT: '#555555',
        // },
       botella: '#026670',
       botella_claro: '#C9FFB3',
       amarillo_claro: '#FEF9C7',
       amarillo_medio: '#FCE181',
       gris_claro: '#EDEAE5' 
      },
      backgroundImage: {
        // hero_img: "url('/img/hero/newHero.jpg')",
        hero_img: "url('/img/home/img19.jpg')",
        // hero_img: "url('/img/hero/bg.jpg')",
        about_img: "url('/img/about/image.png')",
        interview: "url('/img/interview/bg.png')",
      },
      // svg elements
      content: {
        // outlineText: 'url("/src/img/hero/outline-text.svg")',
        outlineText: 'url("/img/hero/UNLEASH.svg")',
      },
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
