"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import menuStructure from "../app/utils/menuStructure";

export interface Context {
  sound: number;
  toogleSound: (path:string) => void;
  soundPath: string;
  setSoundPath: (path: string) => void;
  submenu: string;
  selected: string;
  setSubmenuAndSelected: (submenu: string, selected: string) => void;
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  abrirImagensTelaCheia: { open: boolean; pathImage: string };
  setAbrirImagensTelaCheia: (abrir: { open: boolean; pathImage: string }) => void;

}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<Context | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname();
  const [sound, setSound] = useState(0);
  let arrayOfSubmenu = '';
  if(menuStructure.find((item: { caminho: string }) => item.caminho == currenthPath)){
  const indexSelected = menuStructure.findIndex((item: { caminho: string }) => item.caminho == currenthPath);
  arrayOfSubmenu = menuStructure[indexSelected].submenu?.[0] || '';
  }

  const [menu, setMenu] = useState({ submenu: arrayOfSubmenu, selected: currenthPath });
  const [openMenu, setOpenMenu] = useState(true);
  const [abrirImagensTelaCheia, setAbrirImagensTelaCheia] = useState({open: false, pathImage: ""});
  const [soundPath, setSoundPath] = useState("/start-exp.mp3");


  const setSubmenuAndSelected = (submenu: string, selected: string) => {
    setMenu({ submenu, selected });
  };

  const toogleSound = (path:string) => {
    setSoundPath(path);
    setSound?.(sound == 0 ? 1 : 0); // Alterna o som entre 0 e 1
  }

  

  return (
    <ContextDef.Provider value={{ 
      sound, 
      toogleSound, 
      submenu: menu.submenu, 
      selected: menu.selected, 
      setSubmenuAndSelected,
      openMenu,
      setOpenMenu,
      abrirImagensTelaCheia,
      setAbrirImagensTelaCheia,
      soundPath,
      setSoundPath,
    }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};
