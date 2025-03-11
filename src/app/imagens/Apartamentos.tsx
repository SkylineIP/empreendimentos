"use client";
import Image from "next/image";
import React from "react";

const array = Array.from(
  { length: 9 },
  (_, index) => `/imagens/apt/Miniatura Galeria - ${index}.png`
);

interface Apartamentos {
    setImagemAmpliada: React.Dispatch<React.SetStateAction<{ open: boolean; imagem: number }>>;
}

const Apartamentos: React.FC<Apartamentos> = ({ setImagemAmpliada }) => {
  return (
    <div className="row-span-10 pt-16 pr-20 z-20">
      <div className="w-full h-full rounded-r-3xl overflow-y-scroll custom-scrollbar">
        <div className="grid grid-cols-4 gap-4 mx-8 justify-center items-center">
          {array.map((item, index) => (
            <button
              key={item}
              className="rounded-lg p-4"
              onClick={() => setImagemAmpliada({ open: true, imagem: index })}
            >
              <Image
                src={item}
                alt="Miniatura"
                width={380}
                height={200}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartamentos;
