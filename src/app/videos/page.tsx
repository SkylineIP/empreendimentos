"use client";

import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { IconButton } from "@mui/material";
import {
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeUp,
  Fullscreen,
  FullscreenExit,
} from "@mui/icons-material";
import { useContextDefault } from "@/context/Context";
import BarraLateral from "../components/BarraLateral";
// import Submenu from "../components/Submenu";

import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import Image from "next/image";
import menuStructure from "../utils/menuStructure";

const videos = [
  { title: "CONCEITO", path: "/video-conceito" },
  { title: "101 M²", path: "/apt-101" },
  { title: "122 M²", path: "/apt-122" },
  { title: "150 M²", path: "/apt-155" },
];

const Videos: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // 🔹 Tipagem corrigida
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [muted, setMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;

  const selected = context?.selected;
  const indexSelected = menuStructure.findIndex(
    (item) => item.caminho == selected
  );
  const arrayOfSubmenu = menuStructure[indexSelected].submenu;
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};
  const btnPressed = "bg-[#AFA38B] text-[#1E1E1E]  border-[#1E1E1E]";
  const btnNormal = "bg-[#1E1E1E] text-[#AFA38B] border-2";
  const videosPath = submenu
    ? videos.find((video) => video.title === submenu)?.path
    : videos[0].path; // 🔹 Usando o submenu para determinar o vídeo

  const handleMouseMove = () => {
    setShowControls(true);

    // Limpa o timeout anterior, se existir
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }

    // Se estiver em fullscreen, esconde após 3s de inatividade
    if (isFullscreen) {
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      // 🔹 Sempre verificar se não é null
      if (playing) {
        videoRef.current.pause();
      } else {
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
        containerRef.current
          .requestFullscreen()
          .then(() => setIsFullscreen(true));
      } else {
        document.exitFullscreen().then(() => setIsFullscreen(false));
      }
    }
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    const newVolume = typeof newValue === "number" ? newValue : newValue[0];

    setVolume(newVolume);

    // Aqui você aplicaria o volume ao seu player de vídeo/áudio
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
      videoRef.current.muted = false;
      if (newVolume === 0) {
        setMuted(true);
      } else {
        setMuted(false);
      }
    }
  };

  useEffect(() => {
    setPlaying(false);
  }, [submenu]);

  return (
    <div
      className={`min-w-[800px] min-h-[600px] w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12 ${
        openMenu ? "animate-fade" : "animate-fade-right"
      } animate-duration-[2000ms] ease-in-out overflow-hidden`}
      key={`${openMenu}`}
    >
      <BarraLateral />
      <div
        // 🔹 Adicionado ref aqui
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12 bg-background relative`}
      >
        <div
          className={`${
            isFullscreen && !showControls ? "cursor-none" : "cursor-auto"
          } row-span-10 w-full h-full relative pl-7`}
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <video
            poster="/thumb.png"
            ref={videoRef} // 🔹 Corrigido
            className="w-full h-full object-contain animate-fade animate-duration-[1000ms]"
            src={`${videosPath}.mp4`} // Substitua pelo caminho do seu vídeo
            onClick={togglePlay}
            playsInline
            onTimeUpdate={() =>
              setCurrentTime(
                Number(videoRef.current?.currentTime.toFixed(2)) || 0
              )
            }
            onLoadedMetadata={() =>
              setDuration(videoRef.current?.duration || 0)
            }
          ></video>
          {showControls && (
            <div
              className="absolute bottom-2 left-2 right-2 flex flex-col items-center justify-between bg-[#AFA38B]/30 p-2 mx-12 rounded-lg z-50 "
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <Box className="w-full px-4 ">
                <Slider
                  value={currentTime}
                  min={0}
                  max={duration}
                  step={1}
                  onChange={(_, value) => {
                    const newTime =
                      typeof value === "number" ? value : value[0];
                    setCurrentTime(newTime);
                    if (videoRef.current) {
                      videoRef.current.pause();
                    }
                    setPlaying(false);
                  }}
                  onChangeCommitted={(_, value) => {
                    const newTime =
                      typeof value === "number" ? value : value[0];
                    if (videoRef.current) {
                      videoRef.current.currentTime = newTime;
                      videoRef.current.play();
                      setPlaying(true);
                    }
                  }}
                  valueLabelDisplay="auto"
                />
              </Box>
              {/* Botão Play/Pause */}
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center">
                  <IconButton onClick={togglePlay} className="text-white">
                    {playing ? <Pause /> : <PlayArrow />}
                  </IconButton>

                  {/* Botão Mute/Unmute */}
                  <IconButton
                    onClick={toggleMute}
                    className="text-white"
                    onMouseEnter={() => setShowVolumeSlider(true)}
                  >
                    {muted ? <VolumeOff /> : <VolumeUp />}
                  </IconButton>
                  {showVolumeSlider && (
                    <Box sx={{ width: 100, zIndex: 100 }} className="">
                      <Slider
                        orientation="horizontal"
                        value={volume}
                        min={0}
                        max={100}
                        step={1}
                        aria-label="Volume"
                        valueLabelDisplay="auto"
                        onChange={handleVolumeChange}
                      />
                    </Box>
                  )}
                </div>

                <IconButton onClick={toggleFullscreen} className="text-white ">
                  {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
                </IconButton>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#AFA38B] row-span-2  ml-6 mt-6 flex justify-center items-center">
          {arrayOfSubmenu.map((item, index) => (
            <button
              key={index}
              className={`${
                submenu == item ? btnPressed : `${btnNormal}`
              } border-2 relative flex w-56 desktop:w-72 items-center justify-center rounded-lg shadow-md overflow-hidden h-12 ${
                indexSelected === 4 ? "mx-4" : "desktop:mx-12 mx-4"
              }`}
              onClick={() => {
                setSubmenuAndSelected(item, selected || "");
              }}
              disabled={item == "PROJETISTAS"}
            >
              {/* {console.log(item, submenu)} */}
              <div className="absolute inset-y-0 left-0 w-12 h-full">
                <Image
                  src={`${
                    submenu == item
                      ? "/menu/grafismo-submenu.svg"
                      : "/menu/grafismo-submenu-pressed.svg"
                  }`}
                  alt="Decoração esquerda"
                  fill
                  className="object-fill"
                />
              </div>

              {/* Texto */}
              <span className="text-sm tracking-wide ml-11 my-1 grow desktop:text-xl p-2 desktop:p-0">
                {item}
              </span>

              {/* Ícone Direito */}
              <div className="w-12 h-full relative">
                <Image
                  src={`${
                    submenu == item
                      ? "/menu/grafismo-submenu.svg"
                      : "/menu/grafismo-submenu-pressed.svg"
                  }`}
                  alt="Ícone de localização"
                  fill
                  className="scale-x-[-1] object-fill"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
