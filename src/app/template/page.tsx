'use client';

import React from 'react';
import menuStructure from "../utils/menuStructure";
import { useRouter } from "next/navigation";
import { useContextDefault } from "../../context/Context";
import Image from 'next/image';

const Page: React.FC = () => {
      const router = useRouter();
      const context = useContextDefault();
      const selected = context?.selected;
      const setSubmenuAndSelected = context
        ? context.setSubmenuAndSelected
        : () => {};
    return (
        <div className='w-full h-screen bg-primary text-primary grid grid-cols-12 grid-rows-12'>
            <div className=' col-span-3 row-span-12 bg-[#896337] w-full my-6 rounded-r-3xl flex flex-col justify-between items-center p-[15%]'>
                <div>
                    <Image src='/logo-altez.svg' alt="logo altez" width={200} height={200} />
                </div>
            {menuStructure.map((item, index) => (
          <div key={index + item.title} className="w-full">
            <button
              onClick={() => {
                setSubmenuAndSelected(item.submenu[0], item.caminho);
                router.push(item.caminho);
                //setIsOpen(false);
              }}
              className={`w-full font-thin tracking-[5px] text-background text-[1.2vw] desktop:text-[0.8vw] desktopmini:text-[0.8vw] font-aktiv text-left p-2 ${
                selected === item.caminho ? "underline italic" : ""
              }`}
            >
              {item.title.toUpperCase()}
            </button>
          </div>
        ))}
            </div>
            <div className='col-span-9 row-span-12 grid grid-rows-12 bg-[#E2DED2]'>
                <div className='bg-[#E2DED2] row-span-10 pt-16 pr-20'>
                    <div className='w-full h-full bg-[#c29461] rounded-r-3xl'></div>
                </div>
                <div className='bg-[#AFA38B] row-span-2 ml-6 mt-6 flex justify-center items-center'>
                </div>
            </div>
        </div>
    );
};

export default Page;