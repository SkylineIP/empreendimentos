"use client";

import {  useEffect, useRef } from "react";
import { useContextDefault } from "../../context/Context";

const Music = () => {
  const context = useContextDefault();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const soundPath = context?.soundPath;
  const sound = context?.sound;
  
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load(); // Recarrega o áudio para garantir que a mudança no `src` seja aplicada
      audio.volume = 0.5; 
      audio.play().catch((err) => console.error("Erro ao tocar áudio:", err));
    }
  }, [sound]);

  return (
    <div className="hidden h-0 w-0">
      <audio ref={audioRef} src={soundPath} />
    </div>
  );
};

export default Music;
