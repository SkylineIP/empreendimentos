"use client";

import React from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import Image from "next/image";
import FichaTecnica from "./FichaTecnica";
import Diferenciais from "./Diferenciais";

const Page: React.FC = () => {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;
  return (
    <div className="w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12">
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12 bg-[#E2DED2]"`}
      >
          {submenu == "FICHA TÉCNICA" && <FichaTecnica />}
          {submenu == "DIFERENCIAIS" && <Diferenciais />}
          {/* {submenu == "INSTITUCIONAL" && <FichaTecnica />}
          {submenu == "PROJETISTAS" && <FichaTecnica />} */}
        <Submenu />
      </div>
    </div>
  );
};

export default Page;
