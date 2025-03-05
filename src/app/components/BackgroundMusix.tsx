'use client';

import { useEffect, useRef } from "react";
import { useContextDefault } from "../../context/Context";

const BackgroundMusic = () => {
  const context = useContextDefault();
  const sound = context?.sound;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (sound) {
        audioRef.current
          .play()
          .catch((error) => console.error("Erro ao iniciar áudio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [sound]);

  return (
    <div className="hidden h-0 w-0">

      <audio ref={audioRef} src="/musica.mp3" loop />
    </div>
  );
};

export default BackgroundMusic;
