"use client"

import type React from "react"
import BarraLateral from "../components/BarraLateral"
import { SubmenuImagens } from "../components/Submenu"
import Image from "next/image"

const Localizacao: React.FC = () => {
  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative overflow-auto">
      <BarraLateral select={1} />
      <SubmenuImagens />
      <div className="col-span-9 bg-black row-span-9 relative">
        <Image src="/imagens/imagem-1.png" alt="Imagem 1" fill className="object-cover object-top" />
      </div>

      {/* Horizontal scrolling container */}
      <div
        className="absolute h-1/4 right-0 bottom-0 w-5/6 animate-fade-down animate-duration-[2000ms] bg-submenuimagens flex whitespace-nowrap overflow-x-auto py-10 gap-6"
      >
        {Array.from({ length: 8 }, (_, index) => (
          <div key={`image-${index}`} className="inline-block h-full w-full relative min-w-[400px]" >
            <Image
              src={`/imagens/M00${index + 1}.png`}
              alt={`Imagem ${index + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="absolute h-1/4 right-0 bottom-0 w-1/4 animate-fade-down animate-duration-[2000ms] z-30 select-none bg-gradient-to-r from-transparent to-submenuimagens">
        <Image src="/imagens/shadow-box.svg" alt="Imagem 1" fill className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Localizacao