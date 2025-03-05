"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";

const menu: { [key: string]: string[] } = {
  institucional: [],
  assinaturas: [
    "ornare",
    "vero festas",
    "paisagismo",
    "interiores e decorado",
    "arquitetura e fachada",
  ],
  localização: ["marista", "vistas 360º", "mapas"],
  imagens: ["áreas comuns", "áreas privativas"],
  implantação: ["térreo", "lazer"],
  plantas: ["apartamentos", "penthouses", "compare"],
  vídeos: [],
  "ficha técnica": [],
};

const submenusRoute = [
  "/institucional",
  "/assinaturas",
  "/localizacao",
  "/imagens",
  "/implantacao",
  "/plantas",
  "/videos",
  "/fichatecnica",
];

const MenuPage: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const sound = context?.sound;
  const setSound = context ? context.toggleSound : () => {};
  const setSubmenuAndSelected = context ? context.setSubmenuAndSelected : () => {};

  return (
    <div className="w-full h-screen flex justify-evenly bg-background">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 grid-rows-3 justify-start items-start h-[50%] gap-x-[8vh] p-20 gap-y-[12vh]">
          {Object.keys(menu).map((item, index) => (
            <button
              className="grow text-menuText text-[1vw] font-aktiv border border-spacing-4 border-[#B29A83] rounded-none p-3 tracking-[0.5vw] animate-fade-up animate-duration-[2000ms]"
              key={item}
              onClick={() => {
                router.push(submenusRoute[index]);
                setSubmenuAndSelected(menu[item][0], submenusRoute[index]);
              }}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 flex gap-2 desktop:right-32 animate-fade">
        <div className="relative w-[8vw] h-[8vw] max-w-[50px]">
          <Image
          className="cursor-pointer"
          src="/btn-home.svg"
          alt="botão para voltar a tela inicial"
          fill
          priority
          onClick={() => router.push("/")}
        />
        </div>
        <div className="relative w-[8vw] h-[8vw] max-w-[50px]">
          <Image
          className="cursor-pointer"
          src={`${sound ? "/btn-som-ativo.svg" : "/btn-som-desativado.svg"}`}
          alt="botão para ativar ou desativar som"
          fill
          onClick={() => setSound()}
        />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;