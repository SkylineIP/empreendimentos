"use client";

import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import { memo, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const TelaCheia: React.FC = memo(() => {
  const context = useContextDefault();
  const abrirImagensTelaCheia = context?.abrirImagensTelaCheia;
  const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;

  const imgRef = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);
  const [startDistance, setStartDistance] = useState<number | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [zoomFactor, setZoomFactor] = useState(1); 
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<SignatureCanvas>(null);
  // Função para calcular a distância entre dois pontos de toque
  const getDistance = (touches: Touch[]) => {
    if (touches.length < 2) return 0;
    const [touch1, touch2] = touches;
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Evento de início do toque
  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2) {
      setStartDistance(getDistance(Array.from(e.touches) as Touch[]));
      setZoomFactor(1); // Reinicia o efeito acumulativo do zoom

      // Calcula o ponto médio entre os dois dedos para centralizar o zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const centerX = (touch1.clientX + touch2.clientX) / 2;
      const centerY = (touch1.clientY + touch2.clientY) / 2;

      setTouchStart({ x: centerX, y: centerY });
    } else if (e.touches.length === 1 && scale > 1) {
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  // Gerencia o zoom e o arrastar da imagem
  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length === 2 && startDistance !== null) {
      const currentDistance = getDistance(Array.from(e.touches) as Touch[]);
      
      // **Fator de suavização** para reduzir o impacto imediato da pinça
      const smoothingFactor = 0.05;
      const distanceChange = (currentDistance - startDistance) * smoothingFactor;
      
      // **Acúmulo progressivo**: Quanto mais tempo o movimento durar, mais zoom ele dá
      const newZoomFactor = zoomFactor + Math.abs(distanceChange) * 0.02;
      setZoomFactor(newZoomFactor);

      // **Novo cálculo do zoom**, com limite entre 1x e 3x
      const newScale = Math.min(Math.max(1, scale + distanceChange * newZoomFactor), 3);

      if (touchStart && imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const offsetX = (touchStart.x - rect.left) / rect.width;
        const offsetY = (touchStart.y - rect.top) / rect.height;

        setPosition({
          x: (offsetX - 0.5) * (newScale - 1) * rect.width,
          y: (offsetY - 0.5) * (newScale - 1) * rect.height,
        });
      }

      setScale(newScale);
    } else if (e.touches.length === 1 && scale > 1 && touchStart) {
      // Movimento de arrastar a imagem
      const dx = e.touches[0].clientX - touchStart.x;
      const dy = e.touches[0].clientY - touchStart.y;

      setPosition({
        x: lastPosition.x + dx,
        y: lastPosition.y + dy,
      });
    }
  };

  const handleTouchEnd = () => {
    setLastPosition(position);
    setStartDistance(null);
    setTouchStart(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col justify-center items-center font-[Montserrat] p-16 gap-y-8">
      <div className="w-full h-full rounded-3xl relative text-white">
        <Image
          ref={imgRef}
          src={abrirImagensTelaCheia?.pathImage || ""}
          alt="Imagem Ampliada"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: "transform 0.1s ease-out",
          }}
          fill
          className="object-contain object-top"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove} 
          onTouchEnd={handleTouchEnd}
        />
      </div>
      <div className="absolute right-8 top-8 flex justify-between items-center gap-x-8">
        <button
          onClick={() => {
            setAbrirImagensTelaCheia?.({ open: false, pathImage: "" });
          }}
        >
          <Image
            src="/menu/max-pressed.svg"
            alt="botao para fechar"
            aria-label="fechar"
            width={50}
            height={50}
            className="object-contain"
          />
        </button>
        <button
          onClick={() => setIsDrawing(!isDrawing)}
        >
          <Image
            src={isDrawing ? "/pencil-pressed.svg" : "/pencil.svg"}
            alt="botao para fechar"
            aria-label="fechar"
            width={50}
            height={50}
            className="object-contain z-50 relative"
          />
        </button>
      </div>
      {isDrawing && (
        <div className="absolute inset-0">
          <SignatureCanvas
            ref={canvasRef}
            penColor="red"
            canvasProps={{
              className: "w-full h-full bg-transparent"
            }}
          />
          {/* Botão para limpar o desenho */}
          <button
            onClick={() => canvasRef.current?.clear()}
            className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Limpar
          </button>
        </div>
      )}
    </div>
  );
});

TelaCheia.displayName = "TelaCheia"; // Nome do componente para debugging

export default TelaCheia;
