"use client";

import Image from "next/image";
import React, { memo } from "react";
import menuStructure from "../utils/menuStructure";
import { useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";

interface BarraLateralProps {
  select: number;
}

const BarraLateral: React.FC<BarraLateralProps> = memo(function BarraLateral({ select }) {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const router = useRouter();
  const handleClick = (item: { caminho: string, submenu: string[] }) => {
    router.push(item.caminho);
    setSubmenuAndSelected?.(item.submenu[0], item.caminho); // Chama a função setSubmenuAndSelected com o submenu e caminho do item
  }
  return (
    <div className="bg-telamenu col-span-1 border-6 border-[#BC6422] flex flex-col w-full h-full items-center justify-between relative select-none row-span-12">
        <div className="relative w-full h-full select-none  ">
          <Image
            src="/menu/logo-superior.svg"
            alt="logo-superior"
            fill
            className="select-none"
          />
        </div>
        {menuStructure.map((item, index) => (
          <button key={index} className={`relative w-full h-full select-none ${select === index && 'bg-[url(/menu/fundo-pressed.svg)] bg-cover bg-center bg-no-repeat my-10'}`}
          onClick={() => handleClick(item)}>  
            <Image
              src={select === index ? `/menu${item.caminho}-pressed.svg` : `/menu${item.caminho}.svg`}
              alt={`${item.title}`}
              fill
              className="cursor-pointer p-6"
            />
          </button>
        ))}
      </div>
      
  );
});

export default BarraLateral;
