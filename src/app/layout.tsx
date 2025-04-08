import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ContextDefault } from "../context/Context";

import ThemeRegistry from "./materialUITheme";

// import { CapacitorUpdater } from '@capgo/capacitor-updater'


// CapacitorUpdater.notifyAppReady();

// const func = async () => {
//   await CapacitorUpdater.notifyAppReady();
// }

// func();

export const metadata: Metadata = {
  title: "Dresden Altez",
  description: "App for enterprises made by Fernando Oliveira",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`bg-background text-foreground text-[Questrial]`}>
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
