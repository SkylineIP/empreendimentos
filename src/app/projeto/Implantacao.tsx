import Image from "next/image";
import React from "react";
import SvgImplantacao from "./SvgImplantacao";

const Implantacao: React.FC = () => {
  const [detalhes, setDetalhes] = React.useState({
    status: false,
    elementoIndex: -1,
  });
  return (
    <div className="col-span-9 bg-[#003332] row-span-12 grid grid-rows-12 relative">
      <div className="bg-background row-span-1 relative">
        <Image
          src="/projeto/barra-superior.png"
          alt="Imagem de Implantação"
          fill
          className="object-cover"
        />
      </div>
      <div className="row-span-9 w-full h-full relative z-10">
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
                src={`/projeto/b-informacoes-${detalhes.elementoIndex}.png`}
                alt="Imagem de Implantação"
                fill
                className="object-contain"
                onClick={() =>
                  setDetalhes({ status: false, elementoIndex: -1 })
                }
              />
            </div>
          </div>
        )}
      </div>
      <div className=" row-span-2"></div>
    </div>
  );
};

export default Implantacao;
