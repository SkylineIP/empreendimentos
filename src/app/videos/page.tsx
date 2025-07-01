"use client";

import React, { useEffect } from "react";
import Menu from "../components/Menu";
import Videos from "../components/Video";
import { useContextDefault } from "@/context/Context";
import Submenu from "../components/Submenu";

const Serie: React.FC = () => {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const submenu = context?.submenu;

  useEffect(() => {
    if (submenu === "video-1") return;
    setSubmenuAndSelected?.("video-1", "/videos");
  }, []);

  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] ">
      <Menu select={0} />
      <div className="col-span-19 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        <div className="row-span-24 col-span-1"></div>
        <div className="row-span-3 col-span-17"></div>
        <div className="row-span-17 col-span-17 ">
          <Videos thumb="" videoSrc="" />
        </div>
        <div className="row-span-2 col-span-17"></div>

        <Submenu menuSelect={0} />
      </div>
    </div>
  );
};

export default Serie;
