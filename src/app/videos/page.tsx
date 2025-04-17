"use client";

import React from "react";
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
import BarraLateral from "../components/BarraLateral";
// import Submenu from "../components/Submenu";

import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import { SubmenuImagens } from "../components/Submenu";
import Image from "next/image";

const Videos: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // 🔹 Tipagem corrigida
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [muted, setMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100); // Volume inicial em 50%
  const [isFullscreen, setIsFullscreen] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [video, setVideo] = useState("/videos/chefe.mp4");
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
      }, 2000);
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
  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative">
      <BarraLateral select={4} />
      <SubmenuImagens indexLegenda={4} />
      <div className="col-span-9 bg-[#ECE2CD] row-span-12 grid grid-rows-12 relative">
        <div className="row-span-1"></div>
        <div
          className={`${
            isFullscreen && !showControls ? "cursor-none" : "cursor-auto"
          } row-span-10 w-full h-full grid grid-rows-12 bg-background relative overflow-hidden`}
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <video
            poster="/poster-video-1.png"
            autoPlay
            ref={videoRef} // 🔹 Corrigido
            className="w-full h-screen object-cover animate-fade animate-duration-[1000ms]"
            src={video} // Substitua pelo caminho do seu vídeo
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
              className="absolute bottom-2 left-2 right-2 flex flex-col items-center justify-between bg-[#234C43]/80 p-2 mx-12 rounded-lg z-50 "
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <Box className="w-full px-4">
                <Slider
                  value={currentTime}
                  min={0}
                  max={duration}
                  step={1}
                  style={{ color: "#BC6422" }}
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
                  <IconButton onClick={togglePlay} >
                    {playing ? <Pause /> : <PlayArrow />}
                  </IconButton>

                  {/* Botão Mute/Unmute */}
                  <IconButton
                    onClick={toggleMute}
                    onMouseEnter={() => setShowVolumeSlider(true)}
                  >
                    {muted ? <VolumeOff /> : <VolumeUp />}
                  </IconButton>
                  {showVolumeSlider && (
                    <Box sx={{ width: 100, zIndex: 100 }}>
                      <Slider
                        style={{ color: "#BC6422" }}
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
        <div className={`absolute w-full h-full top-[1/2] py-[16%]`}>
          <div className="w-1/6 pl-10 h-full flex flex-col justify-evenly items-start gap-y-8">
            <button className="grow w-full h-full relative">
              <Image
                src="/videos/video-2.png"
                alt="Imagem de Implantação"
                fill
                className="object-cover absolute border-6 border-[#BC6422] rounded-3xl"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.play();
                  }
                  setVideo("/videos/chefe.mp4");
                  setPlaying(true);
                }}
              />
              <Image
                src="/videos/play.svg"
                alt="Imagem de Implantação"
                width={50}
                height={50}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={() => {
                  setVideo("/videos/video-2.mp4");
                  if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.play();
                    setPlaying(true);
                  }
                }}
              />
              {video === "/videos/chefe.mp4" && (
                <div className="bg-black/30 backdrop-brightness-50 w-full h-full z-10 border-6 border-[#BC6422] rounded-3xl"></div>
              )}
            </button>
            <button className="grow w-full h-full relative">
              <Image
                src="/videos/video-1.png"
                alt="Imagem de Implantação"
                fill
                className="object-cover absolute border-6 border-[#BC6422] rounded-3xl"
                onClick={() => {
                  setVideo("/videos/video-2.mp4");
                  if (videoRef.current) {
                    videoRef.current.play();
                    setPlaying(true);
                  }
                }}
              />
              <Image
                src="/videos/play.svg"
                alt="Imagem de Implantação"
                width={50}
                height={50}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={() => {
                  setVideo("/videos/video-2.mp4");
                  if (videoRef.current) {
                    videoRef.current.play();
                    setPlaying(true);
                  }
                }}
              />
              {video === "/videos/video-2.mp4" && (
                <div className="bg-black/30 backdrop-brightness-50 w-full h-full z-10 border-6 border-[#BC6422] rounded-3xl"></div>
              )}
            </button>
          </div>
        </div>
        <div className="row-span-1 bg-[#ECE2CD]"></div>
      </div>
    </div>
  );
};

export default Videos;

// const videoRef = useRef<HTMLVideoElement | null>(null); // 🔹 Tipagem corrigida
// const [playing, setPlaying] = useState(false);
// const [muted, setMuted] = useState(false);
// const [isFullscreen, setIsFullscreen] = useState(false);
// const containerRef = useRef<HTMLDivElement | null>(null);

// const togglePlay = () => {
//   if (videoRef.current) {
//     // 🔹 Sempre verificar se não é null
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   }
// };

// const toggleMute = () => {
//   if (videoRef.current) {
//     videoRef.current.muted = !muted;
//     setMuted(!muted);
//   }
// };

// const toggleFullscreen = () => {
//   if (containerRef.current) {
//     if (!document.fullscreenElement) {
//       containerRef.current
//         .requestFullscreen()
//         .then(() => setIsFullscreen(true));
//     } else {
//       document.exitFullscreen().then(() => setIsFullscreen(false));
//     }
//   }
// };

// return (
//   <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative">
//     <BarraLateral select={4} />
//     <SubmenuImagens indexLegenda={4} />
//     <div className="col-span-9 bg-[#003332] row-span-12 grid grid-rows-12 relative">
//       <div className="row-span-1"></div>
//       <div ref={containerRef} className="relative col-span-10 w-full h-[83vh] overflow-hidden">
//         <video
//           ref={videoRef} // 🔹 Corrigido
//           className="w-full h-screen object-center animate-fade animate-duration-[1000ms] -z-10"
//           src="/videos/chefe.mp4" // Substitua pelo caminho do seu vídeo
//           onClick={togglePlay}
//           playsInline
//         ></video>
//         <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-[#003332]/70 p-2 mx-12 rounded-lg z-50 border-2 border-[#003332] ">
//           {/* Botão Play/Pause */}
//           <div>
//             <IconButton onClick={togglePlay} className="text-white">
//               {playing ? <Pause /> : <PlayArrow />}
//             </IconButton>

//             {/* Botão Mute/Unmute */}
//             <IconButton onClick={toggleMute} className="text-white">
//               {muted ? <VolumeOff /> : <VolumeUp />}
//             </IconButton>
//           </div>

//           <IconButton onClick={toggleFullscreen} className="text-white ">
//             {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
//           </IconButton>
//         </div>
//       </div>
//       <div className="row-span-1 bg-white"></div>
//     </div>
//   </div>
// );
