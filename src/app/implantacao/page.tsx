"use client";

import React, { useEffect } from "react";
import Menu from "../components/Menu";
import Compare from "./Compare";
import Submenu from "../components/Submenu";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";
const ImagensPage: React.FC = () => {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const submenu = context?.submenu;

  useEffect(() => {
    if (submenu === "implantacao") return;
    setSubmenuAndSelected?.("implantacao", "/implantacao");
  }, []);
  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] ">
      <Menu select={2} />
      <div className="col-span-19 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        <div className="row-span-24 col-span-1"></div>
        <div className="row-span-3 col-span-17"></div>
        {submenu === "implantacao" && (
          <div
            className="row-span-17 col-span-17 relative w-full h-full
          animate-fade animate-duration-[1000ms]"
          >
            <Image
              src="/skyline.png"
              fill
              alt="Implantação"
              className="object-contain w-full h-full"
            />
          </div>
        )}
        {submenu === "compare" && (
          <div className="row-span-17 col-span-17 relative w-full h-full">
            <Compare />
          </div>
        )}
        <div className="row-span-2 col-span-17 flex items-center justify-center text-2xl font-bold cursor-pointer"></div>
        <Submenu menuSelect={2} />
      </div>
    </div>
  );
};

export default ImagensPage;
