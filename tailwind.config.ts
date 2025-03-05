import type { Config } from "tailwindcss";
import tailwindAnimate from 'tailwindcss-animate';
import tailwindAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        menu: "var(--menu)",
        menuText: "var(--menuText)",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))", // Define um grid de 24 colunas
      },
    },
    screens: {
      desktop: { min: "1536px" },  // Estilos para telas maiores que 1536px
      desktopmini: { min: "901px", max: "1535px" },  // Ajustes para telas de 901px até 1535px
      tablet: { min: "601px", max: "900px" },  // Ajustes para tablets (601px até 900px)
      mobile: { max: "600px" },  // Ajustes para telas menores que 601px
    },
  },
  plugins: [tailwindAnimate, tailwindAnimated],
} satisfies Config;
