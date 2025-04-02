"use client";

import React from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import Implantacao from "./Implantacao";
import Plantas from "./Plantas";
import Compare from "./Compare";

const Page: React.FC = () => {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;

  return (
    <div key={`${openMenu}`} className={`w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12 
      
    ${submenu === "IMPLANTAÇÃO" && "bg-[url(/projeto/implantacao/fundo-3.png)]"}
    ${submenu === "PLANTAS" && "bg-[url(/projeto/plantas/fundo-plantas.png)]"}
     bg-cover bg-center animate-fade-right animate-duration-[2000ms] ease-in-out"`}>
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12`}
      >
        <div className="row-span-10 flex">
            {submenu === "IMPLANTAÇÃO" && <Implantacao />}
            {submenu === "PLANTAS" && <Plantas />}
            {submenu === "COMPARE" && <Compare />}
        </div>
        <Submenu />
      </div>
    </div>
  );
};

export default Page;

