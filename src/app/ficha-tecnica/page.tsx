import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";
const FichaPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] ">
      <Menu select={5} />
      <div className="col-span-19 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        <div className="row-span-24 col-span-1"></div>
        <div className="row-span-3 col-span-17"></div>
        <div className="row-span-17 col-span-17 relative w-full h-full">
          <Image
            src="/skyline.png"
            alt="Skyline"
            fill
            className="object-contain"
          />
        </div>
        <div className="row-span-2 col-span-17 flex items-center justify-center "></div>
      </div>
    </div>
  );
};

export default FichaPage;
;
