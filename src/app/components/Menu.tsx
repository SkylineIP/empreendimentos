"use client";

import React, { memo } from "react";
import menuStructure from "../utils/menuStructure";
import { useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";

interface Menu {
  select: number;
}

const delay = [
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
  "animate-delay-500",
  "animate-delay-600",
  "animate-delay-700",
];

const Menu: React.FC<Menu> = memo(function Menu({ select }) {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const router = useRouter();
  const handleClick = (item: { caminho: string; submenu: string[] }) => {
    router.push(item.caminho);
  };
  return (
    <div className="col-span-5 bg-foreground border-2 border-personalizeorange grid grid-rows-24">
      <div className="row-span-6 relative animate-fade animate-duration-[2500ms ] text-white bg-background/70 cursor-pointer flex justify-center items-center">
        Seria a logo
      </div>
      <div className="row-span-14 grid grid-rows-7 grid-cols-6">
        <div className="col-span-1 row-span-14"></div>
        <div className="col-span-4 row-span-14 flex flex-col items-center justify-between py-4">
          {menuStructure.map((item, index) => (
            <button
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              className={`text-background desktop:text-sm desktop:w-56 w-48 text-[12px] h-12 flex items-center justify-center  cursor-pointer border-2 border-personalizeorange rounded-full animate-fade-right ${
                delay[index]
              } animate-duration-[2000ms] ${
                select === index
                  ? "bg-personalizeorange text-white"
                  : "hover:bg-personalizeorange/20"
              }`}
            >
              <p className="font-[Questrial]">{item.title}</p>
            </button>
          ))}
        </div>

        <div className="col-span-1 row-span-14"></div>
      </div>
      <div
        className="row-span-4 relative flex items-center justify-center animate-fade animate-duration-[2500ms] text-white bg-background/70 cursor-pointer"
        onClick={() => {
          router.push("/menu"); // Redireciona para a página inicial
          setSubmenuAndSelected?.("/", "/menu"); // Chama a função setSubmenuAndSelected com o submenu e caminho desejado
        }}
      >
        Seria a imagem de home
      </div>
    </div>
  );
});

export default Menu;
