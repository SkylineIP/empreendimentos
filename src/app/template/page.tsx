"use client";

import React from "react";
import menuStructure from "../utils/menuStructure";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import Image from "next/image";

const btnPressed = 'bg-[#EAE6DA] text-[#754C24]  border-[#754C24]';
const btnNormal = 'bg-[#754C24] text-[#EAE6DA] border-[#EAE6DA]';
const  btnOnHover = 'hover:bg-[#EAE6DA]/30';
const Page: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const selected = context?.selected;
  const teste = '/localizacao';
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};
  return (
    <div className="w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12">
      <div className=" col-span-3 row-span-12 bg-[#896337] w-full my-6 rounded-r-3xl flex flex-col justify-between items-center p-[15%]">
        <div>
          <Image
            src="/logo-altez.svg"
            alt="logo altez"
            width={200}
            height={200}
          />
        </div>
        {menuStructure.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setSubmenuAndSelected(item.submenu[0], item.caminho);
              router.push(item.caminho);
              //setIsOpen(false);
            }}
            className={`${teste == item.caminho ? btnPressed : `${btnNormal} hover:bg-[#EAE6DA]/30`} border-2 relative flex items-center justify-between w-full rounded-lg shadow-md overflow-hidden h-12"  `}        >
            {/* Ícone de fundo esquerdo */}
            <div className="absolute inset-y-0 left-0 w-12 h-full">
              <Image
                src={`${teste == item.caminho ? '/menu/grafismo-menu.svg' : '/menu/grafismo-menu-pressed.svg'}`}
                alt="Decoração esquerda"
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <span className="text-2xl tracking-wide ml-11 my-1 grow desktop:text-xl">
              {item.title}
            </span>

            {/* Linha separadora */}
            <div className={`w-[2px] h-full bg-[#754C24] m-0 ${teste == item.caminho ? 'bg-[#754C24]' : 'bg-[#E2DED2]'}`}></div>

            {/* Ícone Direito */}
            <Image
              src={teste == item.caminho ? `/menu${item.caminho}-pressed.svg` : `/menu${item.caminho}.svg`}
              alt="Ícone de localização"
              className="mx-4 p-[3px]"
              width={24}
              height={24}
            />
          </button>
        ))}
        <div className="w-full flex items-center justify-center gap-12">
          <button>
            <Image
              src="/menu/max.svg"
              alt="Ícone de saída"
              width={60}
              height={60}
            />
          </button>
          <button>
            <Image
              src="/menu/home.svg"
              alt="Ícone de saída"
              width={60}
              height={60}
            />
          </button>
        </div>
      </div>
      <div className="col-span-9 row-span-12 grid grid-rows-12 bg-[#E2DED2]">
        <div className="bg-[#E2DED2] row-span-10 pt-16 pr-20">
          <div className="w-full h-full bg-[#c29461] rounded-r-3xl"></div>
        </div>
        <div className="bg-[#AFA38B] row-span-2 ml-6 mt-6 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Page;
