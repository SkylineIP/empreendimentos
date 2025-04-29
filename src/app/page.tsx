"use client";

import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const toogleSound = context?.toogleSound;
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const handleClick = () => {
    router.push("/localizacao"); // Redireciona para a página de localizaçãoyline como false para ocultar a imagem de fundo
    setSubmenuAndSelected?.('ILHA RASA', '/localizacao'); // Chama a função setSubmenuAndSelected com o submenu e caminho desejado
    if (toogleSound) {
      toogleSound("start-exp.mp3"); // Chama a função toogleSound com o caminho do áudio
    } // Verifica se toogleSound está definido
  };
  return (
    <div className="w-fulll h-screen bg-background-tela-inicial overflow-hidden">
      <div
          id="tela-inicial"
          className="w-full h-screen flex justify-evenly bg-[#234C43] bg-[url(/inicial/fundo-inicial.jpg)] bg-cover bg-center bg-no-repeat animate-fade-right cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src="/inicial/logo.svg"
            className="animate-fade-in animate-duration-[3000ms] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Skyline, inovação e produções"
            width={500}
            height={500}
          />
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4 cursor-pointer">
            <Image
              src="/inicial/inicie.svg"
              className="animate-duration-[3000ms] object-contain z-10 animate-wiggle animate-infinite"
              alt="Skyline, inovação e produções"
              width={300}
              height={300}
            />
          </button>
        </div>
        <div className="hidden h-0 w-0">
      <audio src="praia.mp3" autoPlay />
    </div>
    </div>
  );
};

export default Home;
