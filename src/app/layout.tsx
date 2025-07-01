import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ContextDefault } from "../context/Context";
import ThemeRegistry from "./materialUITheme";

export const metadata: Metadata = {
  title: "Skyline",
  description: "Modelo de Replicação apoiado na Documentação feita para o setor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-background text-foreground font-[Questrial]`}>
        <React.StrictMode>
          <ContextDefault>
            <ThemeRegistry>{children}</ThemeRegistry>
            {/* preciso colocar a barra lateral aqui, porque ela aparece em todas as telas, menos na rota '/' e na rota '/menu'*/}
          </ContextDefault>
        </React.StrictMode>
      </body>
    </html>
  );
}
