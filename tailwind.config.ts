import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#40961D",
        grey_1: "#F9F9F9",
        grey2: "#ECECEC",
        footerText: "#5a5c5c",
        
        dark: "#111111",
        // grey: {
        //   DEFAULT: '#555555',
        // },
        botella: "#026670",
        botella_claro: "#C9FFB3",
        amarillo_claro: "#FEF9C7",
        amarillo_medio: "#FCE181",
        gris_claro: "#EDEAE5",
        //site 2
        turquesa: "#0B4750",
        verde: "#C9FFB3",
        gris: "#E8E7E7",
        verde_oscuro: "#153137",
        verde_claro: "#EFFFE8",
        //new
        dark1: "#262c2e",
        dark2: "#262c2eb3",
        green2: "#093F32",
        //another
       
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
      
        // heroBg: "url('/assets/bg-hero2.jpg')",
        homeHeroD: "url('/assets/home/home-hero-desktop-night.jpg')",
         homeHeroM: "url('/assets/home/home-hero-mobile-night.jpg')"
     
      },
    
      fontFamily: {
        // primary: ['Oswald', 'sans-serif'],
        // secondary: ["MANROPE_REGULAR", "sans-serif"],
        // tertiary: ["Rozha One", "sans-serif"],
        logo: ["logo"],
        roboto_regular: ["roboto", "sans-serif"],
        ibm_plex_sans: ["ibm-plex-sans"],
        jakarta: ["jakarta"],
        marcellus: ["marcellus"],
        dm_serif: ["dm serif"],
        satoshi: ["satoshi"],
        satoshi_medium: ["satoshi-medium"]
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
