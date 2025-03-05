"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[100vh] flex justify-evenly bg-[#B29A83]" onClick={() => router.push("/menu")}>
      Tela Inicial
    </div>
  );
};

export default Home;

