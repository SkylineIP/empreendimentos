"use client";

import React from "react";
import BarraLateral from "../components/BarraLateral";
import {SubmenuLocalizacao} from "../components/Submenu";


const Localizacao: React.FC = () => {

  return (
    <div className="w-full h-screen bg-telamenu grid grid-cols-12 grid-rows-12 min-h-[800px] min-w-[1200px] relative">
      <BarraLateral select={3} />
      <SubmenuLocalizacao menuSelect={3} />
    </div>
  );
};

export default Localizacao;
