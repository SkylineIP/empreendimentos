"use client";

import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const toogleSound = context?.toogleSound;
  const [openSkyline, setOpenSkyline] = React.useState(false);

  const handleClick = () => {
    router.push("/localizacao"); // Redireciona para a página de localização
    setOpenSkyline(false); // Define openSkyline como false para ocultar a imagem de fundo
    if (toogleSound) {
      toogleSound("start-exp.mp3"); // Chama a função toogleSound com o caminho do áudio
    } // Verifica se toogleSound está definido
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenSkyline(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Limpa o timer quando o componente é desmontado

  return (
    <div className="w-fulll h-screen bg-background-tela-inicial">
      {openSkyline ? (
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
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4">
            <Image
              src="/inicial/inicie.svg"
              className="animate-duration-[3000ms] object-contain z-10 animate-wiggle animate-infinite"
              alt="Skyline, inovação e produções"
              width={300}
              height={300}
            />
          </button>
        </div>
      ) : (
        <Image
          src="/skyline.png"
          className="animate-fade-in animate-duration-[3000ms] bg-gradient-to-r from-[#2824B4] to-[#0058D7] object-contain"
          alt="Skyline, inovação e produções"
          priority
          fill
        />
      )}
    </div>
  );
};

export default Home;
