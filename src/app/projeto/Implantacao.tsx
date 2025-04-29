import Image from "next/image";
import React from "react";
import SvgImplantacao from "./SvgImplantacao";

const Implantacao: React.FC = () => {
  const [detalhes, setDetalhes] = React.useState({
    status: false,
    elementoIndex: -1,
  });
  return (
    <div className="col-span-9 bg-[#234C43] row-span-12 grid grid-rows-24 relative">
      <div className="bg-background row-span-2 relative flex justify-end items-center gap-4 px-8">
        <p className="font-[PPPangaia] text-5xl">IMPLANTAÇÃO</p>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="row-span-19 w-full h-full relative z-10">
        <Image
          src={"/projeto/implantacao.png"}
          alt="Imagem de Implantação"
          fill
          className="object-contain"
        />
        <SvgImplantacao setDetalhes={setDetalhes} />
        {detalhes.status && (
          <div className="absolute z-50 w-full h-full left-0 top-0">
            <div className="relative w-full h-full">
              <Image
                src={`/projeto/b-informacoes-${detalhes.elementoIndex + 1}.png`}
                alt="Imagem de Implantação"
                fill
                className="object-contain"
              />
            </div>
              <Image
              src="/projeto/b-retornar.png"
              alt="botão para voltar"
              fill
              className="absolute cursor-pointer"
              onClick={() => setDetalhes({ status: false, elementoIndex: -1 })}
            />
          </div>
        )}
      </div>
      <div className=" row-span-2"></div>
    </div>
  );
};

export default Implantacao;
