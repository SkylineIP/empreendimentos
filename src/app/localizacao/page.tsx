"use client";

import React, { memo } from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
import { useContextDefault } from "../../context/Context";
import GoogleMap from "./GoogleMaps";
import Ultratour from "./Ultratour";
import Image from "next/image";

const Localizacao: React.FC = memo(function Localizacao() {
  const context = useContextDefault();
  const openMenu = context?.openMenu;
  const submenu = context?.submenu;
  return (
    <div
      className={`w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12 ${
        openMenu ? "animate-fade-left" : "animate-fade-right"
      } `}
      key={`${openMenu}`}
    >
      <BarraLateral />
      <div
        className={`${
          openMenu ? "col-span-11" : "col-span-11"
        } row-span-12 grid grid-rows-12 bg-[#E2DED2] `}
      >
        <Image
          src="/Detalhe.svg"
          alt="Decoração esquerda"
          width={200}
          height={200}
          className="object-cover absolute top-0 right-4"
        />
        <div className="bg-[#E2DED2] row-span-10 pt-16 pr-20">
          <div className="w-full h-full bg-[#c29461] rounded-r-3xl overflow-hidden">
            {submenu == "ULTRATOUR" ? <Ultratour /> : <GoogleMap />}
          </div>
        </div>
        <Submenu />
      </div>
    </div>
  );
});

export default Localizacao;

{
  /* <iframe
    className="w-full h-screen border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.5320607121951!2d-49.2598995583593!3d-16.705719238012904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1003f1b0dc7%3A0xa30d2f05af3404e7!2sBossa%20OM%20Home!5e1!3m2!1spt-BR!2sbr!4v1739292152630!5m2!1spt-BR!2sbr"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */
}
