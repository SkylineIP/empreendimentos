'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import menuStructure from "../app/utils/menuStructure";

export interface Context {
  sound: boolean;
  toggleSound: () => void;
  submenu: string;
  selected: string;
  setSubmenuAndSelected: (submenu: string, selected: string) => void;
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<Context | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname();
  const [sound, setSound] = useState(false);
  let arrayOfSubmenu = '';
  if(menuStructure.find((item: { caminho: string }) => item.caminho == currenthPath)){
  const indexSelected = menuStructure.findIndex((item: { caminho: string }) => item.caminho == currenthPath);
  arrayOfSubmenu = menuStructure[indexSelected].submenu[0];
  }

  const [menu, setMenu] = useState({ submenu: arrayOfSubmenu, selected: currenthPath });
  const [openMenu, setOpenMenu] = useState(false);
  const toggleSound = () => {
    setSound(!sound);
  };

  const setSubmenuAndSelected = (submenu: string, selected: string) => {
    setMenu({ submenu, selected });
  };
  

  return (
    <ContextDef.Provider value={{ 
      sound, 
      toggleSound, 
      submenu: menu.submenu, 
      selected: menu.selected, 
      setSubmenuAndSelected,
      openMenu,
      setOpenMenu,
    }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};
