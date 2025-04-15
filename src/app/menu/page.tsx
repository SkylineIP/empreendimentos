"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import menuStructure from "../utils/menuStructure";

const MenuPage: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault();
  const [ajuda, setAjuda] = useState(false);
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};
  const toogleSound = context?.toogleSound;

  return (
    <div className="w-full h-screen bg-background grid grid-cols-12 py-16 gap-x-10 animate-fade-right animate-duration-[2000ms] ease-in-out overflow-hidden">
      <div className="col-span-8 bg-foreground w-full h-full rounded-r-3xl bg-[url(/menu-inicial/fundo-esquerda.png)] bg-cover bg-center bg-no-repeat flex flex-col py-20 items-center relative">
        <div className="absolute right-0 h-full w-[20%]">
          <div className="w-full h-full relative flex flex-col justify-end items-center pb-24">
            {ajuda && (
              <Image
                src="/menu/qrcode.png"
                width={200}
                height={200}
                alt="qrcode"
                className=" cursor-pointer animate-fade-up p-2"
                onClick={() => setAjuda((prev) => !prev)}
              />
            )}
            <Image
              src={ajuda ? "/menu/ajuda-pressed.svg" : "/menu/ajuda.svg"}
              width={50}
              height={50}
              alt="ajuda"
              className=" cursor-pointer"
              onClick={() => setAjuda((prev) => !prev)}
            />
          </div>
        </div>
        <div className="imagem-logo grow h-auto w-[80%]">
          <div className="w-full h-full relative">
            <Image src="/logo-altez.svg" alt="Logo" fill />
          </div>
        </div>
        <div
          className="menu grow-[2] grid grid-cols-2  desktop:gap-x-20 gap-x-12 justify-center items-center desktop:w-[7
      0%]"
        >
          {menuStructure.map((item, index) => (
            <div
              key={index}
              className={` ${
                item.title == "INFORMAÇÕES"
                  ? "place-self-center col-span-2 min-w-[450px]"
                  : "col-span-1"
              }`}
            >
              <button
                key={index}
                onClick={() => {
                  setSubmenuAndSelected(item.submenu[0], item.caminho);
                  router.push(item.caminho);
                  if (toogleSound) {
                    toogleSound("button-effect.mp3");
                  }
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
                <span className="text-sm tracking-wide ml-11 my-1 grow desktop:text-xl text-[#E2DED2] p-2">
                  {item.title}
                </span>

                {/* Linha separadora */}
                <div className="w-[2px] h-full m-0 bg-[#E2DED2]"></div>

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
        <Image
          src="/menu-inicial/logos-incorporadora.png"
          alt="Logo"
          width={400}
          height={800}
        />
      </div>
      <div className="col-span-4 bg-black w-full h-full rounded-l-3xl relative overflow-hidden">
        <Image
          src="/menu-inicial/imagem-menu.png"
          alt="Menu"
          fill
          className="object-cover"
        />
      </div>
      <Image
        src="/voltar-descanso.svg"
        width={50}
        height={50}
        alt="Voltar"
        className="absolute bottom-4 left-4 cursor-pointer"
        onClick={() => {
          router.push("/");
          if (toogleSound) {
            toogleSound("button-effect.mp3"); // Chama a função toogleSound com o caminho do áudio
          } // Verifica se toogleSound está definido
        }}
      />
    </div>
  );
};

export default MenuPage;
