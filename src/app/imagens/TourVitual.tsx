import Image from "next/image";
import React, { useRef, useState } from "react";

const TourVitual: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="row-span-10 pt-16 pr-20 z-20">
      <div className="w-full h-full relative" ref={containerRef}>
        <iframe
          src="/tour-3d/index.htm?media-index=1"
          className="w-full h-full border-0 rounded-r-3xl"
          allowFullScreen
        />

        <Image
          src={`/menu/max${isFullscreen ? "-pressed" : ""}.svg`}
          alt="expandir imagem"
          width={50}
          height={50}
          className="absolute bottom-4 right-4 cursor-pointer "
          onClick={() => toggleFullscreen()}
        />
      </div>
    </div>
  );
};

export default TourVitual;
