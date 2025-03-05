"use client";

import Image from "next/image";
import React, { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";

const menu = [
  { title: "institucional", submenu: [], caminho: "/institucional" },
  {
    title: "assinaturas",
    submenu: [
      "ornare",
      "vero festas",
      "paisagismo",
      "interiores e decorado",
      "arquitetura e fachada",
    ],
    caminho: "/assinaturas",
  },
  {
    title: "localização",
    submenu: ["marista", "vistas 360º", "mapas"],
    caminho: "/localizacao",
  },
  {
    title: "imagens",
    submenu: ["áreas comuns", "áreas privativas"],
    caminho: "/imagens",
  },
  {
    title: "implantação",
    submenu: ["térreo", "lazer"],
    caminho: "/implantacao",
  },
  {
    title: "plantas",
    submenu: ["apartamentos", "penthouses", "compare"],
    caminho: "/plantas",
  },
  { title: "vídeos", submenu: [], caminho: "/videos" },
  { title: "ficha técnica", submenu: [], caminho: "/fichatecnica" },
];

const BarraLateral: React.FC= memo(function BarraLateral() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const context = useContextDefault();
  const sound = context?.sound;
  const setSound = context ? context.toggleSound : () => {};
  const submenuSelected = context?.submenu;
  const selected = context?.selected;
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};

  return (
    <>
      {/* Botão de menu para telas menores */}
      <button
        className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-md desktop:hidden desktopmini:hidden"
        onClick={() => setIsOpen(true)}
      >
        <ListIcon fontSize="large" />
      </button>

      {/* Overlay para escurecer o fundo quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 desktop:hidden desktopmini:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Barra lateral */}
      <div
        className={`fixed h-full bg-[#F7EDDC] flex flex-col justify-between transition-transform duration-300 ease-in-out 
        ${isOpen ? "w-1/4 translate-x-0" : "-translate-x-full"} 
        desktop:w-1/6 desktopmini:w-1/6 desktopmini:translate-x-0 desktop:translate-x-0 z-50`}
      >
        {/* Botão de fechar no mobile */}
        <div className="absolute top-4 right-4 desktop:hidden desktopmini:hidden">
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon fontSize="large" />
          </button>
        </div>

        {/* Conteúdo do menu com SCROLL */}
        <div className="h-full flex flex-col overflow-y-auto max-h-screen no-scrollbar">
          {/* Logo */}
          <div className="py-16 flex justify-center items-center">
            <Image
              className="object-cover animate-fade-up animate-duration-[2000ms]"
              src="/logo-mini.png"
              alt="Logo"
              width={150}
              height={20}
            />
          </div>
          {/* Menu */}
          <div className="grow p-4 flex flex-col w-full justify-evenly">
            {menu.map((item, index) => (
              <div key={index + item.title} className="w-full">
                <button
                  onClick={() => {
                    setSubmenuAndSelected(item.submenu[0], item.caminho);
                    router.push(item.caminho);
                    setIsOpen(false);
                  }}
                  className={`w-full font-thin tracking-[5px] text-[#55551C] text-[1.2vw] desktop:text-[0.8vw] desktopmini:text-[0.8vw] font-aktiv text-left p-2 ${
                    selected === item.caminho ? "underline italic" : ""
                  }`}
                >
                  {item.title.toUpperCase()}
                </button>
                {item.submenu.length > 0 && selected === item.caminho && (
                  <div className="mr-4">
                    {item.submenu.map((subitem, index) => (
                      <button
                        key={index + subitem}
                        className={`break-keep w-full text-[#55551C] font-AddingtonCF text-right py-1 desktop:px-4 ${
                          submenuSelected === subitem
                            ? "flex-row-reverse italic"
                            : ""
                        } flex items-end justify-items-start animate-fade-up animate-duration-[2000ms]`}
                        onClick={() => {
                          setSubmenuAndSelected(subitem, selected);
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-[1.2vw] desktop:text-[1vw] desktopmini:text-[1vw]">{subitem}</span>
                        <span className="linha grow "></span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botões de controle */}
          <div className="flex gap-8 py-10 justify-center items-center">
            <div className="relative w-10 h-10">
              <Image
                className="cursor-pointer"
                src="/btn-home.svg"
                alt="Voltar ao menu"
                fill
                onClick={() => {
                  router.push("/menu");
                  setIsOpen(false);
                }}
              />
            </div>
            <div className="relative w-10 h-10">
              <Image
                className="cursor-pointer"
                src={sound ? "/btn-som-ativo.svg" : "/btn-som-desativado.svg"}
                alt="Ativar ou desativar som"
                fill
                onClick={() => setSound()}
              />
            </div>

            
          </div>
          <div className={`select-none fixed hidden left-[7.7vw] desktopmini:block desktopmini:left-[9.5vw]  desktop:left-[9.5vw] desktop:block w-full h-screen animate-fade-up animate-duration-[2000ms] pointer-events-none`}>
              <div className="relative w-full h-screen">
                <Image
                  className="object-contain cursor-pointer prevent-clicks select-none pointer-events-none"
                  src="/bg-menu-lateral.svg"
                  alt="barras inferior"
                  fill
                  onClick={() => setIsOpen(true)}
                />
              </div>
            </div>
        </div>
      </div>
    </>
  );
});

export default BarraLateral;
