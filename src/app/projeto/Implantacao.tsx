import React, { useState } from "react";
import Image from "next/image";

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
  "4. SALÃO DE FESTAS",
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

const Implantacao: React.FC = function Implantacao() {
  const [imageDestaque, setImageDestaque] = useState(1);
  const [changeType, setType] = useState("Térreo");
  return (
    <div className="w-full h-full flex justify-between items-center p-20 relative animate-fade" key={`${changeType}`}>
      <div className="div-1 grow h-full flex flex-col items-left justify-evenly mt-20 pt-40 text-sm">
        {(changeType === "Térreo" ? arrayLegendaBol : arrayLegendaBol2).map(
          (item, index) => (
            <button
              disabled={(changeType === "Térreo" ? bolotario : bolotario2).some(
                (value) => value === index + 1
              )}
              className="flex items-center justify-between text-[#1E1F1F] "
              key={index}
              onClick={() => {
                if (
                  !(changeType === "Térreo" ? bolotario : bolotario2).some(
                    (value) => value === index + 1
                  )
                ) {
                  setImageDestaque(index + 1);
                }
              }}
            >
              <p
                className={`${
                  index === imageDestaque - 1
                    ? "bg-foreground text-background"
                    : "text-[#1E1F1F]"
                } p-1 rounded-full px-4`}
              >
                {item}
              </p>
            </button>
          )
        )}
      </div>
      <div className="div-2 grow-[4] h-full relative">
        <Image
          src={`${
            changeType === "Térreo"
              ? "/projeto/implantacao/planta1.png"
              : "/projeto/implantacao/planta2.png"
          }`}
          alt="implantacao"
          fill
          className="object-contain p-12"
        />
      </div>
      <div className="absolute -bottom-16 right-0 -translate-y-1/2 flex justify-center items-center w-3/4 gap-x-32">
        <div className="flex flex-col justify-start items-start w-full gap-y-4 h-full">
          <div className="relative h-full">
            <Image
              src="/projeto/implantacao/IMPLANTAÇÃO.png"
              alt="Térreo"
              width={800}
              height={200}
            />
            <div className="flex gap-8 h-full w-full">
              <button
                className={`w-full p-2 px-10 rounded-lg  ${
                  changeType === "Térreo"
                    ? "bg-background text-foreground border-2 border-foreground"
                    : "bg-background text-foreground border-2 border-foreground "
                }`}
                onClick={() => {setType("Térreo"); setImageDestaque(1)}}
              >
                TÉRREO
              </button>
              <button
                className={`w-full p-2 px-10 rounded-lg  ${
                  changeType === "Mezanino"
                    ? "bg-background text-foreground border-2 border-foreground"
                    : "bg-background text-foreground border-2 border-foreground "
                }`}
                onClick={() => {setType("Mezanino"); setImageDestaque(4)}}
              >
                MEZANINO
              </button>
            </div>
          </div>
        </div>
        <Image
          className={`${
            !(changeType === "Térreo" ? bolotario : bolotario2).some(
              (value) => value === imageDestaque
            )
              ? "opacity-100"
              : "opacity-0"
          } mr-32 absolute right-0 bottom-0`}
          src={`/projeto/implantacao/Imagem-Bolotário-${changeType}-${imageDestaque}.png`}
          alt="toque nas legendas"
          width={280}
          height={220}
        />
      </div>
      <Image
        src="/projeto/implantacao/toque-nas-legendas.svg"
        alt="toque nas legendas"
        className="mr-12 absolute top-80 left-96"
        width={220}
        height={220}
      />
    </div>
  );
};

export default Implantacao;
