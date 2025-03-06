'use client';

//import Image from "next/image";
import React, { memo } from "react";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
//import ListIcon from "@mui/icons-material/List";
//import CloseIcon from "@mui/icons-material/Close";
import menuStructure from "../utils/menuStructure";

const BarraLateral: React.FC = memo(function BarraLateral() {
  //const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const context = useContextDefault();
  const selected = context?.selected;
  const setSubmenuAndSelected = context
    ? context.setSubmenuAndSelected
    : () => {};

  return (
    <>
      {/* Menu */}
      <div className="grow bg-black flex flex-col w-1/4 justify-evenly fixed h-screen my-6 rounded-r-3xl">
        {menuStructure.map((item, index) => (
          <div key={index + item.title} className="w-full">
            <button
              onClick={() => {
                setSubmenuAndSelected(item.submenu[0], item.caminho);
                router.push(item.caminho);
                //setIsOpen(false);
              }}
              className={`w-full font-thin tracking-[5px] text-background text-[1.2vw] desktop:text-[0.8vw] desktopmini:text-[0.8vw] font-aktiv text-left p-2 ${
                selected === item.caminho ? "underline italic" : ""
              }`}
            >
              {item.title.toUpperCase()}
            </button>
          </div>
        ))}
      </div>
    </>
  );
});

export default BarraLateral;
