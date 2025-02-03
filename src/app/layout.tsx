import type { Metadata } from "next";
import "./globals.css";
import React from 'react';
import { ContextDefault } from '../context/Context';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "Padrão",
  description: "App for enterprises made by Fernando Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`font-bold`}
      >
        <React.StrictMode>
        <ContextDefault>
        {children}
        </ContextDefault>
        </React.StrictMode>
      </body>
    </html>
  );
}
