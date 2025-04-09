import React, { memo } from "react";
import menuStructure from "../utils/menuStructure";
import Image from "next/image";

interface SubmenuProps {
  menuSelect: number;
}

const Submenu: React.FC<SubmenuProps> = memo(function Submenu({menuSelect}) {
  return (
    <div className="bg-telamenu col-span-2 rounded-br-[250px] border-b-[12px] border-r-[12px] border-[#BC6422] flex flex-col w-full h-full items-center justify-between m-0 p-0">
        {menuStructure[menuSelect].submenuElements.map((item, index) => (
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
  );
});

export default Submenu;
