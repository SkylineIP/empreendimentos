"use client";

import React from "react";
import { useContextDefault } from "../../context/Context";
import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause, VolumeOff, VolumeUp, Fullscreen, FullscreenExit } from "@mui/icons-material";

const Videos: React.FC = () => {
  const context = useContextDefault();
  const sound = context?.sound;
  const setSound = context ? context.toggleSound : () => {};
  const videoRef = useRef<HTMLVideoElement | null>(null); // 🔹 Tipagem corrigida
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) { // 🔹 Sempre verificar se não é null
      if (playing) {
        videoRef.current.pause();
      } else {
        if(sound) {
          setSound();
        }
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().then(() => setIsFullscreen(true));
      } else {
        document.exitFullscreen().then(() => setIsFullscreen(false));
      }
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-12">
      <div className="col-span-2"></div>
      <div ref={containerRef} className="relative col-span-10 w-full h-screen">
        <video
        ref={videoRef} // 🔹 Corrigido
          className="w-full h-screen object-cover animate-fade animate-duration-[1000ms] -z-10"
          src="" // Substitua pelo caminho do seu vídeo
          onClick={togglePlay}
          playsInline
        ></video>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#B29A83]/70 p-2 mx-12 rounded-lg z-50 border-2 border-[#786a5d] ">
        {/* Botão Play/Pause */}
        <div>
        <IconButton onClick={togglePlay} className="text-white">
          {playing ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Botão Mute/Unmute */}
        <IconButton onClick={toggleMute} className="text-white">
          {muted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>
        </div>

        <IconButton onClick={toggleFullscreen} className="text-white ">
          {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
        </IconButton>
      </div>
      </div>
    </div>
  );
};

export default Videos;
