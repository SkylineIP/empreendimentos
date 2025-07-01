"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { useContextDefault } from "@/context/Context";

const ImageGallery: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const toogleSound = context?.toogleSound;
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;

  const handleClick = () => {
    router.push("/menu"); // Redireciona para a página de localizaçãoyline como false para ocultar a imagem de fundo
    setSubmenuAndSelected?.("", "/menu"); // Chama a função setSubmenuAndSelected com o submenu e caminho desejado
    if (toogleSound) {
      toogleSound("start-exp.mp3"); // Chama a função toogleSound com o caminho do áudio
    } // Verifica se toogleSound está definido
  };

  return (
    <div
      className="w-fulll h-screen bg-background-tela-inicial overflow-hidden relative min-h-[800px] min-w-[1200px] flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      CRIE SUA PRIMEIRA EXPERIÊNCIA
    </div>
  );
};

export default ImageGallery;
