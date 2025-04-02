"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex justify-evenly bg-[#B29A83] bg-[url(/tela-descanso.png)] bg-cover bg-center bg-no-repeat animate-fade-right cursor-pointer" onClick={() => router.push("/menu")}>
      <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4">
        <Image src="/botao-iniciar.svg" className="animate-jump-in animate-infinite animate-duration-[5000ms] animate-fill-both" alt="Logo" width={300} height={300}/>
      </button>
    </div>
  );
};

export default Home;

