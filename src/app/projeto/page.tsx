"use client";

import type React from "react";
import BarraLateral from "../components/BarraLateral";
import { SubmenuLocalizacao } from "../components/Submenu";
import { memo } from "react";
import Implantacao from "./Implantacao";
import Image from "next/image";
import { useContextDefault } from "@/context/Context";
import Profissionais from "./Profissionais";

const Imagens: React.FC = memo(function Imagens() {
  const context = useContextDefault();
  const submenu = context?.submenu;
  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative overflow-auto">
      <BarraLateral select={2} />
      <SubmenuLocalizacao menuSelect={2} />
      {submenu === 'IMPLANTAÇÃO' ? (
        <Implantacao />
      ) : (
        <Profissionais />
      )}
      <div className="absolute h-1/8 bottom-0 right-0 w-full bg-[#ECE2CD]">
        <div className="w-9/12 h-full absolute flex justify-center items-center right-0">
          <Image
            src={`/projeto/${submenu === 'IMPLANTAÇÃO' ? 'clique-legenda' : 'arraste-tudo'}.svg`}
            alt="Imagem de Implantação"
            width={250}
            height={100}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
});

export default Imagens;
