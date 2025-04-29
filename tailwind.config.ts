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
        telaInicial: "var(--telainicial)",
        telamenu: "var(--telamenu)",
        submenuimagens: "var(--submenuimagens)",
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      fontFamily: {
        minhaFonte: ['OpenSans', 'OpenSansCondensed', 'sans-OpenSansSemiCondensed', 'PPPangaia', 'Questrial'],
      },
      screens: {
        desktop: { min: "1536px" },
        desktopmini: { min: "901px", max: "1535px" },
        tablet: { min: "601px", max: "900px" },
        mobile: { max: "600px" },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slower': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [tailwindAnimate, tailwindAnimated],
} satisfies Config;
