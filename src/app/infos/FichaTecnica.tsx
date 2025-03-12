import React from "react";
import Image from "next/image";

const FichaTecnica: React.FC = () => {
  return (
    <div className="row-span-10 p-7">
      <div className="w-full h-full bg-[#AFA38B] relative  rounded-3xl overflow-hidden">
        <Image
          src="/info/ficha-tecnica.png"
          alt="ficha técnica"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default FichaTecnica;
