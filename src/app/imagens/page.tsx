"use client";

import React, { memo, useEffect, useState } from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import Image from "next/image";
import AreasComuns from "./AreasComuns";
import Apartamentos from "./Apartamentos";

const arrayCom32Itens = Array.from(
  { length: 32 },
  (_, index) => `/imagens/areas-comuns/Miniatura-Galeria-${index + 1}.png`
);

const arrayCom9Itens = Array.from(
  { length: 9 },
  (_, index) => `/imagens/apt/Miniatura-Galeria-${index + 1}.png`
);

const arrayLegenda = [
  "FACHADA",
  "FACHADA",
  "FACHADA",
  "ENTRADA",
  "LOBBY",
  "SALÃO DE FESTAS",
  "FESTAS EXTERNO",
  "ESPAÇO DELIVERY",
  "MINI MARKET",
  "WORK SPACE",
  "INFLUENCER SPACE",
  "SALA DE REUNIÕES",
  "PET PLACE",
  "QUADRA GRAMADA",
  "PLAYGROUND",
  "VAGA PARA CARREGAMENTO RÁPIDO",
  "BICICLETÁRIO",
  "ESPAÇO GOURMET",
  "SALÃO DE JOGOS",
  "BRINQUETOCA",
  "CHURRASQUEIRA",
  "PRAÇA DO VIOLÃO",
  "MINI QUADRA",
  "BEACH TÊNIS",
  "PRAÇA RELAX",
  "PISCINA ADULTO",
  "PISCINA INFANTIL",
  "SPA, RELAX E SAUNA",
  "SALA DE MASSAGEM",
  "ACADEMIA",
  "ACADEMIA",
  "VISTA AÉREA LAZER",
];

const arrayLegenda1 = [
  "LIVING APTO FINAL 01",
  "VARANDA APTO FINAL 01",
  "LIVING - VARANDA APTO FINAL 02",
  "VARANDA APTO FINAL 02",
  "LIVING APTO FINAL 03",
  "VARANDA APTO FINAL 03",
  "TERRAÇO APTO GARDEN",
  "PISCINA PENTHOUSE",
  "LIVING PENTHOUSE",
];

const Imagens: React.FC = memo(function Localizacao() {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;
  const [categoriaImagens, setCategoriaImagem] = useState("areas-comuns");
  const [arrayDasImagens, setArrayDasImagens] = useState(arrayCom32Itens);
  const [imagemAmpliada, setImagemAmpliada] = useState({
    open: false,
    imagem: 0,
  });
  const setAbrir = context?.setAbrirImagensTelaCheia;

  useEffect(() => {
    if (submenu === "ÁREAS COMUNS") {
      setCategoriaImagem("areas-comuns");
      setArrayDasImagens(arrayCom32Itens);
      setImagemAmpliada({ open: false, imagem: 0 });
    }
    if (submenu === "APARTAMENTOS") {
      setCategoriaImagem("apt");
      setArrayDasImagens(arrayCom9Itens);
      setImagemAmpliada({ open: false, imagem: 0 });
    }
  }, [submenu]);
  return (
    <div className="w-full h-screen bg-[url(/imagens/FUNDO.png)] bg-cover text-primary grid grid-cols-12 grid-rows-12 min-w-[800px] min-h-[600px]">
      <BarraLateral />
      <div
        key={`${openMenu}`}
        className={`${
          openMenu
            ? "col-span-11 animate-fade-left"
            : "col-span-9 animate-fade-right"
        } row-span-12 grid grid-rows-12  animate-duration-[2000ms] ease-in-out `}
      >
        {imagemAmpliada.open ? (
          <div className="row-span-10 z-20 px-16 pt-6">
            <div className="w-full h-full overflow-y-scroll no-scrollbar  grid grid-rows-10 rounded-3xl">
              <div
                key={imagemAmpliada.imagem}
                className="relative w-full h-full row-span-8 bg-[url(/imagens/fundo_imagem.png)] bg-cover bg-no-repeat bg-center rounded-3xl animate-fade-up animate-duration-[2000ms]"
              >
                <Image
                  src={`/imagens/${categoriaImagens}/Imagem-Expandida-${
                    imagemAmpliada.imagem + 1
                  }.png`}
                  alt="Imagem ampliada"
                  fill
                  className="object-cover rounded-3xl"
                />
                <p className="absolute top-8 left-0 z-50 bg-[#E2DED2] p-4 text-3xl tracking-widest text-[#1E1E1E] font-thin rounded-r-3xl font-instrument">
                  {categoriaImagens == "areas-comuns"
                    ? arrayLegenda[imagemAmpliada.imagem]
                    : arrayLegenda1[imagemAmpliada.imagem]}
                </p>
                <Image
                  src="/menu/max.svg"
                  alt="expandir imagem"
                  width={50}
                  height={50}
                  className="absolute bottom-4 right-4 cursor-pointer"
                  onClick={() =>
                    setAbrir?.({
                      open: true,
                      pathImage: `/imagens/${categoriaImagens}/Imagem-Expandida-${
                        imagemAmpliada.imagem + 1
                      }.png`,
                    })
                  }
                />
              </div>
              <div className="w-full row-span-2 overflow-x-auto overflow-y-hidden flex flex-col custom-scrollbar rounded-3xl p-2">
                <div className="flex min-w-max gap-8">
                  {arrayDasImagens.map((item, i) => (
                    <button
                      key={item}
                      className="rounded-lg p-4 snap-start fade-in-20 animate-fade-up animate-duration-[2000ms] desktop:w-32 desktop:h-40 h-28 w-28 flex justify-start items-start"
                      onClick={() =>
                        setImagemAmpliada({ open: true, imagem: i })
                      }
                    >
                      <Image
                        src={item}
                        alt={`Miniatura ${item}`}
                        fill
                        className="object-contain object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {submenu === "ÁREAS COMUNS" && (
              <AreasComuns setImagemAmpliada={setImagemAmpliada} />
            )}
            {submenu === "APARTAMENTOS" && (
              <Apartamentos setImagemAmpliada={setImagemAmpliada} />
            )}
          </>
        )}
        <Submenu />
      </div>
    </div>
  );
});

export default Imagens;
