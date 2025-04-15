"use client";

import Image from "next/image";
import React, { memo } from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import menuStructure from "../utils/menuStructure";

const btnPressed = "bg-[#EAE6DA] text-[#754C24]  border-[#754C24]";
const btnNormal = "bg-[#754C24] text-[#EAE6DA] border-[#EAE6DA]";

const BarraLateral: React.FC = memo(function BarraLateral() {
  const router = useRouter();
  const context = useContextDefault();
  const selected = context?.selected;
  const openMenu = context?.openMenu;
  // const setOpenMenu = context?.setOpenMenu;
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};
  const toogleSound = context?.toogleSound;

  return (
    <div
      key="menu-lateral"
      className={`${
        openMenu
          ? "col-span-1 "
          : "col-span-3 "
      }  row-span-12 bg-[#896337] w-full my-6 rounded-r-3xl flex flex-col justify-between items-center p-[15%]`}
    >
      <div>
        <Image
          src="/logo-altez.svg"
          alt="logo altez"
          width={200}
          height={200}
        />
      </div>
      {!openMenu
        ? menuStructure.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSubmenuAndSelected(item.submenu[0], item.caminho);
                router.push(item.caminho);
                if (toogleSound) {
                  toogleSound('button-effect.mp3'); // Chama a função toogleSound com o caminho do áudio
                } // Verifica se toogleSound está definido
                //setIsOpen(false);
              }}
              className={`${
                selected == item.caminho
                  ? btnPressed
                  : `${btnNormal} hover:bg-[#EAE6DA]/30`
              } border-2 relative flex items-center justify-between w-full rounded-lg shadow-md overflow-hidden h-12`}
            >
              {/* Ícone de fundo esquerdo */}
              <div className="absolute inset-y-0 left-0 w-12 h-full">
                <Image
                  src={`${
                    selected == item.caminho
                      ? "/menu/grafismo-menu-pressed.svg"
                      : "/menu/grafismo-menu.svg"
                  }`}
                  alt="Decoração esquerda"
                  fill
                  className="object-fill"
                />
              </div>

              {/* Texto */}
              <span className="tracking-wide ml-11 my-1 grow desktop:text-xl">
                {item.title}
              </span>

              {/* Linha separadora */}
              <div
                className={`w-[2px] h-full bg-[#754C24] m-0 ${
                  selected == item.caminho ? "bg-[#754C24]" : "bg-[#E2DED2]"
                }`}
              ></div>

              {/* Ícone Direito */}
              <Image
                src={
                  selected == item.caminho
                    ? `/menu${item.caminho}-pressed.svg`
                    : `/menu${item.caminho}.svg`
                }
                alt="Ícone de localização"
                className="mx-4"
                width={24}
                height={24}
              />
            </button>
          ))
        : menuStructure.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSubmenuAndSelected(item.submenu[0], item.caminho);
                router.push(item.caminho);
                if (toogleSound) {
                  toogleSound('button-effect.mp3'); // Chama a função toogleSound com o caminho do áudio
                }
                //setIsOpen(false);
              }}
              className={`${
                selected == item.caminho
                  ? btnPressed
                  : `${btnNormal} hover:bg-[#EAE6DA]/30`
              } border-2 flex items-center justify-center rounded-lg shadow-md overflow-hidden`}
            >
              <Image
                src={
                  selected == item.caminho
                    ? `/menu${item.caminho}-pressed.svg`
                    : `/menu${item.caminho}.svg`
                }
                alt="Ícone de localização"
                className="m-6"
                width={30}
                height={30}
              />
            </button>
          ))}
      <div
        className={`"w-full flex items-center justify-center gap-12 ${
          openMenu ? "flex-col" : "flex-row"
        }`}
      >
        {/* <button onClick={() => setOpenMenu && setOpenMenu(!openMenu)}>
          <Image
            src={`${openMenu ? "/menu/max.svg" : "/menu/max-pressed.svg"}`}
            alt="Ícone de saída"
            width={80}
            height={90}
            className="hidden desktop:block"
          />
        </button> */}
        <button onClick={() => {
          router.push("/menu");
          if (toogleSound) {
            toogleSound('button-effect.mp3'); // Chama a função toogleSound com o caminho do áudio
          }
        }}>
          <Image
            src="/menu/home.svg"
            alt="Ícone de saída"
            width={80}
            height={60}
          />
        </button>
      </div>
    </div>
  );
});

export default BarraLateral;
