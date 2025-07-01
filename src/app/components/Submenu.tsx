"use client";

import React, { memo } from "react";
import { usePathname } from "next/navigation";
import { useContextDefault } from "@/context/Context";
import menuStructure from "../utils/menuStructure";

interface SubmenuProps {
  menuSelect: number;
}

const Submenu: React.FC<SubmenuProps> = memo(function Submenu({ menuSelect }) {
  const context = useContextDefault();
  const setSubmenu = context?.setSubmenuAndSelected;
  const currenthPath = usePathname();
  const submenu = context?.submenu;

  return (
    <div className="row-span-1 col-span-17 flex justify-evenly items-center gap-20 px-12 animate-fade-right animate-duration-[2500ms] font-[Questrial]">
      {menuStructure[menuSelect].submenu.map((item, index) => {
        return (
          <button
            onClick={() => {
              setSubmenu?.(
                menuStructure[menuSelect].submenuElements[index],
                currenthPath
              );
            }}
            key={item}
            className={`w-full desktop:px-4 py-2 rounded-full border-2 border-personalizeorange  cursor-pointer ${
              submenu == menuStructure[menuSelect].submenuElements[index]
                ? "bg-personalizeorange"
                : "hover:bg-personalizeorange/20"
            }`}
          >
            <p
              className={`text-center desktop:text-[1em] text-sm font-[Questrial] ${
                submenu == menuStructure[menuSelect].submenuElements[index]
                  ? "text-white"
                  : "text-menu"
              }`}
            >
              {item}
            </p>
          </button>
        );
      })}
    </div>
  );
});

export default Submenu;
