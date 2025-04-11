"use client";

import React, { useState } from "react";
import BarraLateral from "../components/BarraLateral";
import {SubmenuLocalizacao} from "../components/Submenu";
import Tour from "./Tour";
import GoogleMap from "./GoogleMaps";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";

const Localizacao: React.FC = () => {
  const context = useContextDefault();
  const submenu = context?.submenu;
  const [telaCheia, setTelaCheia] = useState(false);
  const handleTelaCheia = () => {
    setTelaCheia(!telaCheia);
  }
  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative">
      <BarraLateral select={0} />
      <SubmenuLocalizacao menuSelect={0} />
      <div className={`absolute h-full right-0 top-0 ${telaCheia === true ? "z-30 w-full": "w-5/6 h-full z-10"} animate-fade-down animate-duration-[2000ms]`} key={`${telaCheia}`}>
        {submenu === "TOUR 360º" ? (
          <Tour />
        ) : (
          <GoogleMap />
        )}
      </div>
      <div>
        <button className={`absolute bottom-1/8 right-4  m-4 cursor-pointer z-40 ${submenu === 'TOUR 360º' && 'bottom-4'}`} onClick={handleTelaCheia}>
        <Image src={telaCheia ? "/local/b-fechar.svg": "/local/b-expandir.svg"} width={60} height={60} alt="botao para expandir ou fechar expansão da tela" />
        </button>
      </div>
    </div>
  );
};

export default Localizacao;
