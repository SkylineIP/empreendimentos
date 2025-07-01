"use client";

import React, { useEffect } from "react";
import Menu from "../components/Menu";
import Submenu from "../components/Submenu";
import { useContextDefault } from "@/context/Context";
import GoogleMap from "../components/GoogleMaps";

const LocalizacaoPage: React.FC = () => {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const submenu = context?.submenu;

  useEffect(() => {
    if (submenu === "ultratour") return;
    setSubmenuAndSelected?.("ultratour", "/localizacao");
  }, []);
  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] ">
      <Menu select={4} />
      <div className="col-span-19 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        <div className="row-span-24 col-span-1"></div>
        <div className="row-span-3 col-span-17"></div>
        {submenu === "ultratour" && (
          <div
            className="row-span-17 col-span-17 relative w-full h-full
          animate-fade animate-duration-[1000ms]"
          >
            <iframe
              src="https://skylineip.s3.sa-east-1.amazonaws.com/Tour+Virtual/GPL/GPL+-+Hello/index.htm"
              className="w-full h-full rounded-lg"
              title="ultratour"
            ></iframe>
          </div>
        )}
        {submenu === "mapa-2d" && (
          <div className="row-span-17 col-span-17 overflow-hidden">
            <GoogleMap />
          </div>
        )}
        <div className="row-span-2 col-span-17 flex items-center justify-center text-2xl font-bold cursor-pointer"></div>
        <Submenu menuSelect={4} />
      </div>
    </div>
  );
};

export default LocalizacaoPage;
