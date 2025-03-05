"use client";

import React from "react";
import Apartamentos from "./Apartamentos";
import Penthouses from "./Penthouses";
import Compare from "./Compare";
import { useContextDefault } from "../../context/Context";

const InstitucionalPage: React.FC = function Plantas (){
  const context = useContextDefault();
  const submenu = context?.submenu;

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      {submenu == 'apartamentos' && <Apartamentos />}
      {submenu == 'penthouses' && <Penthouses />}
      {submenu == 'compare' && <Compare />}
    </div>
  );
};

export default InstitucionalPage;
