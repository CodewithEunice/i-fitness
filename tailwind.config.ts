import Benefits from "@/components/benefits/Benefits";
import Hero from "@/components/hero/Hero";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     container: {
      center: true,
      padding: "20px"

     },
     colors: {
        "primary-500": "#800080",
        "primary-400": "#A151F1",
        "primary-300": "#782F78",
        "primary-200": "#ECD9F2",
        "accent-500": "#FDBA74",
        "accent-400": "#F6BC7D",
         "accent-300":"#FB923C",
    },
    backgroundImage: {
      hero: "url(/images/realbenefitGraphic.jpg)"
    },
      
    },
    

    
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",

    },
  },

  plugins: [],
};
export default config;
