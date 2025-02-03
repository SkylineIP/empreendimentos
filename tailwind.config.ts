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
      },
    },
    screens: {
      desktop: { min: "1024px" }, // Estilos padrão para telas maiores
      mobile: { max: "1023px" },  // Ajustes específicos para telas menores
    },
  },
  plugins: [tailwindAnimate, tailwindAnimated],
} satisfies Config;
