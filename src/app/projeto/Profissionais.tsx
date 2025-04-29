import Image from "next/image";
import React from "react";

const Profissionais: React.FC = () => {
  return (
    <div className="col-span-9 bg-[#234C43] row-span-12 grid grid-rows-12 relative">
      <div className="bg-background row-span-1 relative flex justify-end items-center gap-4 px-8">	
        <p className="font-[PPPangaia] text-5xl">PROFISSIONAIS</p>
        <Image src="/logo.svg" alt="Logo" width={80} height={60} className="object-contain" />
      </div>
      
      <div className="row-span-9 w-full h-full relative  overflow-scroll no-scrollbar">
        <Image
          src="/projeto/image-scroll.png"
          alt="Imagem de Implantação"
          fill
          className="object-contain min-w-[2500px] object-left"
        />
      </div>

      <div className=" row-span-2"></div>
    </div>
  );
};

export default Profissionais;
