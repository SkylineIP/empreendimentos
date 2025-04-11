"use client";

import React, { memo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";
import menuStructure from "../utils/menuStructure";
interface SubmenuProps {
  menuSelect: number;
}

const legendas = [
  "logo-escrita-localizacao",
  "logo-escrita-imagens",
  "logo-escrita-projeto",
  "logo-escrita-diferenciais",
  "logo-escrita-videos",
];

const SubmenuLocalizacao: React.FC<SubmenuProps> = memo(function Submenu({
  menuSelect,
}) {
  const router = useRouter();
  const context = useContextDefault();
  const setSubmenu = context?.setSubmenuAndSelected;
  const selected = "border-[#E2B34A]";
  const released = "border-[#BC6422]";
  const submenu = context?.submenu;
  const styleButton =
    "w-full h-full relative cursor-pointer bg-black border-6 bg-[url(/submenu/imagem-tour.png)] bg-cover bg-center bg-no-repeat overflow-hidden";
  return (
    <div className="bg-telamenu col-span-2 rounded-br-[250px] border-6 border-[#BC6422] flex flex-col w-full h-full items-center justify-between m-0 p-0 z-20 row-span-12">
      <div className="w-full h-full relative bg-telamenu">
        <Image
          src={`/submenu/${legendas[menuSelect]}.svg`}
          alt={legendas[menuSelect]}
          aria-label={legendas[menuSelect]}
          fill
          className="object-contain"
        />
      </div>
      {menuStructure[menuSelect].submenuElements.map((item, index) => {
        return (
          <div
            key={item}
            className={`${styleButton} ${
              submenu === menuStructure[menuSelect].submenu[index]
                ? selected
                : released
            } ${index % 2 === 0 ? "rounded-br-[50%]" : "rounded-tl-[50%]"}`}
            onClick={() =>
              setSubmenu?.(
                menuStructure[menuSelect].submenu[index],
                "/localizacao"
              )
            }
          >
            {submenu === menuStructure[menuSelect].submenu[index] && (
              <div className="bg-black/30 backdrop-brightness-50 absolute w-full h-full overflow-hidden"></div>
            )}
            <p
              className={`text-white font-[PPPangaio] font-semibold line-clamp-1 text-2xl absolute ${
                index % 2 === 0 ? "top-4 left-4 " : "bottom-4 right-4"
              }`}
            >
              {menuStructure[menuSelect].submenu[index]}
            </p>
          </div>
        );
      })}
      <button
        className="w-full h-full relative cursor-pointer rounded-br-[50%]"
        onClick={() => router.push("/")}
      >
        <Image
          src="/submenu/home.svg"
          alt="Submenu Home"
          aria-label="Submenu Home"
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
});

const SubmenuImagens = memo(function Submenu() {
  return (
    <div className="bg-telamenu col-span-2 rounded-br-[250px] border-6 border-[#BC6422] flex flex-col w-full h-full items-center justify-between m-0 p-0 z-20 row-span-12">
      <div className="w-full h-full relative bg-telamenu">
        <Image
          src={`/submenu/${legendas[1]}.svg`}
          alt={legendas[1]}
          aria-label={legendas[1]}
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full h-full relative bg-telamenu">
        <Image
          src={`/submenu/legenda-imagens.svg`}
          alt="Legenda Imagens"
          aria-label="O seu clube
            exclusivo na ilha
            mais desejada
            do Brasil.
            A extensão da sua casa em Búzios. Para
            se comer bem, relaxar, praticar esportes
            ou simplesmente se deslumbrar com as
            vistas exuberantes que a histórica Ilha
            Rasa te proporciona."
          fill
          className="object-contain"
        />
      </div>
      

      <button className="w-full h-full relative cursor-pointer rounded-br-full">
        <Image
          src="/submenu/home.svg"
          alt="Submenu Home"
          aria-label="Submenu Home"
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
});

export { SubmenuLocalizacao, SubmenuImagens };
