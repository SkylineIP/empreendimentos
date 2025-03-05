'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export interface Context {
  sound: boolean;
  toggleSound: () => void;
  submenu: string;
  selected: string;
  setSubmenuAndSelected: (submenu: string, selected: string) => void;
}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<Context | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname();
  const [sound, setSound] = useState(false);
  const [menu, setMenu] = useState({ submenu: '', selected: currenthPath });

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
    }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};
