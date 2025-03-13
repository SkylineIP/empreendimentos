'use client';
import Image from 'next/image';
import React from 'react';

const arrayCom32Itens = Array.from(
    { length: 32 },
    (_, index) => `/imagens/areas-comuns/Miniatura-Galeria-${index + 1}.png`
  );

interface AreasComunsProps {
  setImagemAmpliada: (value: { open: boolean; imagem: number }) => void;
}

const AreasComuns: React.FC<AreasComunsProps> = ({ setImagemAmpliada }) => {
    return (
        <div className="row-span-10 pt-16 pr-20 z-20">
                    <div className="w-full h-full rounded-r-3xl overflow-y-scroll custom-scrollbar">
                      <div className="grid grid-cols-5 gap-4 mx-8">
                        {arrayCom32Itens.map((item, index) => (
                          <button
                            key={item}
                            className="rounded-lg p-4"
                            onClick={() =>
                              setImagemAmpliada({ open: true, imagem: index })
                            }
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

export default AreasComuns;