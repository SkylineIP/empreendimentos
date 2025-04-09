"use client";

import Image from "next/image";
import React, { memo } from "react";
import menuStructure from "../utils/menuStructure";
import { useRouter } from "next/navigation";

interface BarraLateralProps {
  select: number;
}

const BarraLateral: React.FC<BarraLateralProps> = memo(function BarraLateral({ select }) {
  const router = useRouter();
  const handleClick = (item: { caminho: string }) => {
    router.push(item.caminho);
  }
  return (
    <div className="bg-telamenu col-span-1 border-r-[12px] border-[#BC6422] flex flex-col w-full h-full items-center justify-between relative select-none">
        <div className="relative w-full h-full select-none  ">
          <Image
            src="/menu/logo-superior.svg"
            alt="logo-superior"
            fill
            className="select-none"
          />
        </div>
        {menuStructure.map((item, index) => (
          <button key={index} className={`relative w-full h-full select-none ${select === index && 'bg-[url(/menu/fundo-pressed.svg)] bg-cover bg-center bg-no-repeat'}`}
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
