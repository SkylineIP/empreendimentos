"use client";

import React from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";

const Page: React.FC = () => {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  return (
    <div className="w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12">
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-9"
        } row-span-12 grid grid-rows-12 bg-[#E2DED2]"`}
      >
        <div className="bg-[#E2DED2] row-span-10 pt-16 pr-20">
          <div className="w-full h-full bg-[#c29461] rounded-r-3xl"></div>
        </div>
        <Submenu />
      </div>
    </div>
  );
};

export default Page;
