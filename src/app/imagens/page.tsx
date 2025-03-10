"use client";

import React, { memo } from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import Image from "next/image";

const arrayCom32Itens = Array.from({ length: 32 }, (_, index) => index + 1);



const Imagens: React.FC = memo(function Localizacao() {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  // const submenu = context?.submenu;
  return (
    <div className="w-full h-screen bg-[url(/imagens/FUNDO.png)] bg-cover text-primary grid grid-cols-12 grid-rows-12">
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12 `}
      >
        <div className="row-span-10 pt-16 pr-20 z-20">
          <div className="w-full h-full rounded-r-3xl overflow-y-scroll no-scrollbar">
            <div className="grid grid-cols-5 gap-4 mx-8">
              {arrayCom32Itens.map((item) => (
                <div key={item} className="rounded-lg p-4">
                  <Image
                    src={`/imagens/mini/Miniatura Galeria - ${item}.png`}
                    alt="Decoração esquerda"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Submenu />
      </div>
    </div>
  );
});

export default Imagens;