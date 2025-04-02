import Image from "next/image";
import React, { useState } from "react";
import ImagemAmpliadaDoBolotario from "./ImagemAmpliada";

const arrayLegendaBol = [
  "1. LOBBY",
  "2. PULMÃO SOCIAL",
  "3. GUARITA",
  "4. SALÃO DE FESTAS",
  "5. ÁREA EXTERNA SALÃO DE FESTAS",
  "6. PARQUINHO SALÃO DE FESTAS",
  "7. ESPAÇO DELIVERY",
  "8. MINI MARKET",
  "9. GUARDA VOLUMES",
  "10. ADMINISTRAÇÃO E LOCKER DOS FUNCIONÁRIOS",
  "11. COPA FUNCIONÁRIOS",
  "12. BANHEIROS FUNCIONÁRIOS",
  "13. WORK SPACE",
  "14. INFLUENCER SPACE",
  "15. SALA DE REUNIÕES",
  "16. BIKE WASH",
  "17. BICICLETÁRIO",
  "18. VAGA PARA CARREGAMENTO RÁPIDO - USO COMUM",
  "19. PET PLACE",
  "20. PLAYGROUND",
  "21. MINI CAMPO GRAMADO",
  "22. PORTE COCHÈRE",
  "23. VAGAS PDC PARA VISITANTES",
];

const bolotario = [2, 6, 9, 10, 11, 12, 16, 22, 23];

const arrayLegendaBol2 = [
  "1. APARTAMENTO 111 M²",
  "2. APARTAMENTO 129 M²",
  "3. ESPAÇO GOURMET",
  "4. SALÃO DE JOGOS",
  "5. BRINQUETODECA",
  "6. PLAYGROUND",
  "7. PRAÇA DO VIOLÃO",
  "8. PRAÇA RELAX",
  "9. PRAÇA DO SOL",
  "10. PISCINA ADULTO",
  "11. PISCINA INFANTIL",
  "12. SAUNA",
  "13. SALA DE MASSAGEM",
  "14. SPA",
  "15. RELAX",
  "16. ACADEMIA",
  "17. CHURRASQUEIRA",
  "18. MINI QUADRA",
  "19. QUADRA BEACH TÊNIS",
  "20. APARTAMENTO GARDEN 208 M2",
];

const bolotario2 = [1, 2, 3, 9, 20];

const ImplantacaoTests: React.FC = () => {
  const [imageDestaque, setImageDestaque] = useState(-1);
  const [changeType, setType] = useState("Térreo");
  const [abrirImagemAmpliada, setAbrirImagemAmpliada] = useState(false);
  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-12">
      {/* imagem do grafismo superior */}
      <div className="col-span-12 row-span-2 w-full h-full relative">
        {/* <Image
          src="/projeto/implantacao/grafismo-Implantacao.svg"
          alt="grafismo"
          fill
          className="object-contain object-right"
        /> */}
      </div>

      {/* container das legendas */}
      <div className="col-span-4 row-span-10 overflow-y-auto custom-scrollbar p-10 m-4">
        {(changeType === "Térreo" ? arrayLegendaBol : arrayLegendaBol2).map(
          (item, index) => (
            <button
              disabled={(changeType === "Térreo" ? bolotario : bolotario2).some(
                (value) => value === index + 1
              )}
              className="flex items-center justify-between text-[#1E1F1F] text-left"
              key={index}
              onClick={() => {
                if (
                  !(changeType === "Térreo" ? bolotario : bolotario2).some(
                    (value) => value === index + 1
                  )
                ) {
                  setImageDestaque(index + 1);
                  setAbrirImagemAmpliada(true);
                }
              }}
            >
              <p
                className={(changeType === "Térreo" ? bolotario : bolotario2).some(
                    (value) => value === index + 1
                  ) ? "p-1 rounded-full px-4" : "p-1 rounded-full px-4 hover:bg-foreground hover:text-background"}
              >
                {item}
              </p>
            </button>
          )
        )}
      </div>

      {/* container da implantacao e botões*/}
      <div className="col-span-8 row-span-10 grid grid-rows-12">
        <div className="w-full h-full relative row-span-9">
          <Image
            src={`${
              changeType === "Térreo"
                ? "/projeto/implantacao/planta1.png"
                : "/projeto/implantacao/planta2.png"
            }`}
            alt="implantacao"
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="row-span-3 flex flex-col w-full h-full gap-y-2">
          <div className="w-full h-full relative">
            <Image
              src="/projeto/implantacao/IMPLANTAÇÃO.png"
              alt="Térreo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex w-full gap-x-8 justify-center">
            <button
              className={`w-60 h-8  rounded-lg  ${
                changeType === "Térreo"
                  ? "bg-foreground text-background border-2 border-background"
                  : "bg-background text-foreground border-2 border-foreground"
              }`}
              onClick={() => {
                setType("Térreo");
                setImageDestaque(-1);
              }}
            >
              TÉRREO
            </button>
            <button
              className={`w-60 h-8 rounded-lg  ${
                changeType === "Mezanino"
                  ? "bg-foreground text-background border-2 border-background"
                  : "bg-background text-foreground border-2 border-foreground"
              }`}
              onClick={() => {
                setType("Mezanino");
                setImageDestaque(-1);
              }}
            >
              MEZANINO
            </button>
          </div>
        </div>
      </div>
      {abrirImagemAmpliada && (<ImagemAmpliadaDoBolotario setImageDestaque={setImageDestaque} setOpenImage={setAbrirImagemAmpliada} legenda={changeType === "Térreo" ? arrayLegendaBol[imageDestaque - 1] : arrayLegendaBol2[imageDestaque - 1]}
      tipo={changeType} />)}
    </div>
  );
};

export default ImplantacaoTests;
