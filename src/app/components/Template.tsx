import React from "react";
import BarraLateral from "../components/BarraLateral";
import menuStructure from "../utils/menuStructure";
import Image from "next/image";
const Template: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background grid grid-cols-12 border-[12px] border-[#BC6422] min-h-[800px] min-w-[1200px]">
      <BarraLateral select={0} />
      <div className="bg-telamenu col-span-2 rounded-br-full border-b-[12px] border-r-[12px] border-[#BC6422] flex flex-col w-full h-full items-center justify-around m-0 p-0">
        {menuStructure[0].submenuElements.map((item, index) => (
          <div key={index} className="w-full h-full relative">
            <Image 
              src={`/submenu/${item}.svg`}
              alt={item}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="col-span-9"></div>
    </div>
  );
};

export default Template;
