"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import menuStructure from "../app/utils/menuStructure";

export interface Context {
  sound: number;
  toogleSound: (path:string) => void;
  submenu: string;
  selected: string;
  setSubmenuAndSelected: (submenu: string, selected: string) => void;
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  abrirImagensTelaCheia: { open: boolean; pathImage: string };
  setAbrirImagensTelaCheia: (abrir: { open: boolean; pathImage: string }) => void;
  playVideo: boolean;
  setVideo: (play: boolean) => void;
}

// Criando o contexto com um valor inicial opcional
const ContextDef = createContext<Context | undefined>(undefined);

// Criando o provider
export const ContextDefault = ({ children }: { children: ReactNode }) => {
  const currenthPath = usePathname();
  const [sound, setSound] = useState(0);
  let arrayOfSubmenu = '';

  if(menuStructure.find((item: { caminho: string }) => item.caminho == currenthPath)){
    //acha dentro do menuStructure a rota que ele está, e seleciona o primeiro submenu da primeira opção
  const indexSelected = menuStructure.findIndex((item: { caminho: string }) => item.caminho == currenthPath);
  // Se não encontrar, retorna um array vazio
  arrayOfSubmenu = menuStructure[indexSelected].submenu?.[0] || '';
  //isso serve para rota a pessoa entrar na página de fotos, já abrir o submenu de fotos
  }

  const [menu, setMenu] = useState({ submenu: arrayOfSubmenu, selected: currenthPath });
  const [openMenu, setOpenMenu] = useState(true);
  const [abrirImagensTelaCheia, setAbrirImagensTelaCheia] = useState({open: false, pathImage: ""});
  const [playVideo, setVideo] = useState(false);


  const setSubmenuAndSelected = (submenu: string, selected: string) => {
    setMenu({ submenu, selected });
  };

  const toogleSound = () => {
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
      playVideo,
      setVideo,
    }}>
      {children}
    </ContextDef.Provider>
  )
};

export const useContextDefault = () => {
  return useContext(ContextDef);
};
