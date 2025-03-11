"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import menuStructure from "../utils/menuStructure";

const MenuPage: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};

  return (
    <div className="w-full h-screen bg-background grid grid-cols-12 py-16 gap-x-10">
      <div className="col-span-8 bg-foreground w-full h-full rounded-r-3xl bg-[url(/menu-inicial/fundo-esquerda.png)] bg-cover bg-center bg-no-repeat flex flex-col p-20 items-center">
      <div className="imagem-logo grow h-auto w-[80%]">
        <div className="w-full h-full relative">
          <Image src="/logo-altez.svg" alt="Logo" fill />
        </div>
      </div>
      <div className="menu grow-[2] grid grid-cols-2 grid-rows- gap-x-20 justify-center items-center w-[60%]">
        {menuStructure.map((item, index) => (
          <div key={index} className={` ${item.title == "INFORMAÇÕES" ? "place-self-center col-span-2 min-w-[450px]" : "col-span-1"}`}>
            <button
              key={index}
              onClick={() => {
                setSubmenuAndSelected(item.submenu[0], item.caminho);
                router.push(item.caminho);
              }}
              className={` hover:bg-[#EAE6DA]/30
               border-2 relative flex items-center justify-between w-full rounded-lg shadow-md overflow-hidden h-12 row-span-1`}
            >
              {/* Ícone de fundo esquerdo */}
              <div className="absolute inset-y-0 left-0 w-12 h-full">
                <Image
                  src="/menu/grafismo-menu.svg"
                  alt="Decoração esquerda"
                  fill
                  className="object-fill"
                />
              </div>

              {/* Texto */}
              <span className="text-2xl tracking-wide ml-11 my-1 grow desktop:text-xl text-[#E2DED2]">
                {item.title}
              </span>

              {/* Linha separadora */}
              <div
                className="w-[2px] h-full m-0 bg-[#E2DED2]"
              ></div>

              {/* Ícone Direito */}
              <Image
                src={`/menu${item.caminho}.svg`}
              
                alt="Ícone de localização"
                className="mx-4"
                width={24}
                height={24}
              />
            </button>
            </div>
          ))}
      </div>
          <Image src="/menu-inicial/logos-incorporadora.png" alt="Logo" 
          width={400}
          height={800} />
      </div>
      <div className="col-span-4 bg-black w-full h-full rounded-l-3xl relative overflow-hidden">
        <Image
          src="/menu-inicial/imagem-menu.png"
          alt="Menu"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MenuPage;
