"use client";

import React from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import FichaTecnica from "./FichaTecnica";
import Diferenciais from "./Diferenciais";
import Institucional from "./Institucional";

const Page: React.FC = () => {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;
  return (
    <div
      className={`min-w-[800px] min-h-[600px] *:w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12 ${
        openMenu ? "animate-fade" : "animate-fade-right"
      } animate-duration-[2000ms] ease-in-out overflow-hidden`}
      key={`${openMenu}`}
    >
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12 bg-[#E2DED2]"`}
      >
        {submenu == "FICHA TÉCNICA" && <FichaTecnica />}
        {submenu == "DIFERENCIAIS" && <Diferenciais />}
        {submenu == "INSTITUCIONAL" && <Institucional />}
        <Submenu />
      </div>
    </div>
  );
};

export default Page;
