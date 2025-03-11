"use client";

import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import useOrientation from "./components/verificaOrientacao";
import { usePathname } from "next/navigation";
import LoadingOverlay from "./components/Loading";

//configurar tema
//cores e fontes
const theme = createTheme({
  palette: {
    background: {
      default: "#E2DED2",
    },
    primary: {
      main: "#896337",
    },
    secondary: {
      main: "#AFA38B",
    },
    text: {
      primary: "#E2DED2",
      secondary: "#1E1E1E",
    },
  },
  typography: {
    fontFamily: `"InterTight", "InstrumentSerif-Regular", "InstrumentSerif-Italic",`,
  },
});

import { ThemeProvider } from "@mui/material/styles";

const OrientationWarning = () => (
  <div className="flex flex-col items-center justify-center h-screen background text-primary">
    <h1 className="text-2xl font-bold mb-4">Modo Paisagem Necessário</h1>
    <p className="text-center">
      Por favor, rotacione seu dispositivo para o modo paisagem para uma melhor experiência.
    </p>
  </div>
);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isLandscape = useOrientation();
  useEffect(() => {
    setLoading(true); // Ativa o loading
    const timer = setTimeout(() => {
      setLoading(false); // Desativa após 2s
    }, 3000);

    return () => clearTimeout(timer); // Evita bugs ao desmontar
  }, [pathname]);
  return (
    <ThemeProvider theme={theme}>
      {loading && <LoadingOverlay />}
      {/* pathname === '/' || pathname === '/menu' ? '' : <BarraLateral /> */}
      {isLandscape ? children : <OrientationWarning />}
    </ThemeProvider>
  );
}

