"use client";

import React, { useState, useRef } from "react";
import BarraLateral from "../components/BarraLateral";
import { SubmenuLocalizacao } from "../components/Submenu";
import GoogleMap from "./GoogleMaps";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";

const Localizacao: React.FC = () => {
  const context = useContextDefault();
  const submenu = context?.submenu;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [imagemSelecionada, setImagemSelecioanda] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // Change cursor style
    document.body.style.cursor = "grabbing";
  };

  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    // Prevent default behavior (like text selection) during drag
    e.preventDefault();

    // Calculate cursor position and move the scroll
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset cursor style
    document.body.style.cursor = "default";
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Reset cursor style
      document.body.style.cursor = "default";
    }
  };

  const handleClick = (index: number) => {
    setImagemSelecioanda(index);
  };
  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative overflow-auto">
      <BarraLateral select={0} />
      <SubmenuLocalizacao menuSelect={0} />

      {submenu === "ILHA RASA" ? (
        <>
        <div className="col-span-9 bg-[#ECE2CD] row-span-1 relative">
            <Image
              src="/ilha-rasa/barra-superior.png"
              alt="Imagem 1"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="col-span-9 row-span-8 relative">
            <Image
              src={`/ilha-rasa/ilha-rasa-${imagemSelecionada}.png`}
              alt="Imagem 1"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Horizontal scrolling container */}
          <div
            ref={scrollContainerRef}
            className="absolute h-1/4 right-0 bottom-0 w-5/6 animate-fade-down animate-duration-[2000ms] bg-submenuimagens flex whitespace-nowrap overflow-x-scroll no-scrollbar  py-10 gap-6"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              overflowY: "hidden",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none", // Prevent text selection during drag
            }}
          >
            {Array.from({ length: 51 }, (_, index) => (
              <div
                key={`image-${index+1}`}
                className="inline-block h-full w-full relative min-w-[400px] cursor-pointer"
                onClick={() => handleClick(index + 1)}
              >
                {imagemSelecionada === index + 1 && (
                  <div className="bg-black/30 backdrop-brightness-50 absolute w-full h-full  z-10"></div>
                )}

                <Image
                  src={`/ilha-rasa/ilha-rasa-mini-${index + 1}.png`}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="absolute h-1/4 right-0 bottom-0 w-1/4 animate-fade-down animate-duration-[2000ms] z-30 bg-gradient-to-r from-transparent to-submenuimagens prevent-clicks select-none pointer-events-none">
            <Image
              src="/imagens/shadow-box.svg"
              alt="Imagem 1"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </>
      ) : (
        <GoogleMap />
      )}
    </div>
  );
};

export default Localizacao;
