import React from "react";
import BarraLateral from "../components/BarraLateral";
import Submenu from "../components/Submenu";
const Projeto: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background grid grid-cols-12 border-[12px] border-[#BC6422] min-h-[800px] min-w-[1200px]">
      <BarraLateral select={2} />
      <Submenu menuSelect={2} />
      <div className="col-span-9"></div>
    </div>
  );
};

export default Projeto;
