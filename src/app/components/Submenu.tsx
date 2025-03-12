import React,  {memo } from 'react';
import menuStructure from "../utils/menuStructure";
import { useContextDefault } from "../../context/Context";
import Image from 'next/image';

const Submenu: React.FC = memo(function Submenu() {
    const context = useContextDefault();
    const selected = context?.selected;
    const submenu = context?.submenu;
    const indexSelected = menuStructure.findIndex((item) => item.caminho == selected);
    const arrayOfSubmenu = menuStructure[indexSelected].submenu;
    const setSubmenuAndSelected = context
      ? context.setSubmenuAndSelected
      : () => {};
    const btnPressed = 'bg-[#AFA38B] text-[#1E1E1E]  border-[#1E1E1E]';
    const btnNormal = 'bg-[#1E1E1E] text-[#AFA38B] border-2';
    return (
        <div className="bg-[#AFA38B] row-span-2 ml-6 mt-6 flex justify-center items-center">
          {
            arrayOfSubmenu.map((item, index) => (
                <button
                  key={index}
                  className={`${submenu == item ? btnPressed : `${btnNormal}`} border-2 relative flex w-96 items-center justify-between rounded-lg shadow-md overflow-hidden h-12 ${indexSelected === 4 ? 'mx-4' : 'mx-20'}`}
                  onClick={ () => {
                    setSubmenuAndSelected(item, selected || '');
                  }}
                  disabled={item == 'TOUR VIRTUAL'}
                >
                  {/* {console.log(item, submenu)} */}
                  <div className="absolute inset-y-0 left-0 w-12 h-full">
                    <Image
                      src={`${submenu == item ? '/menu/grafismo-submenu.svg' : '/menu/grafismo-submenu-pressed.svg'}`}
                      alt="Decoração esquerda"
                      fill
                      className="object-fill"
                    />
                  </div>
    
                  {/* Texto */}
                  <span className="text-2xl tracking-wide ml-11 my-1 grow desktop:text-xl">
                    {item}
                  </span>
    
                  {/* Ícone Direito */}
                  <div className='w-12 h-full relative'>
                    <Image
                    src={`${submenu == item ? '/menu/grafismo-submenu.svg' : '/menu/grafismo-submenu-pressed.svg'}`}
                    alt="Ícone de localização"
                    fill
                    className='scale-x-[-1] object-fill'
                  />
                  </div>
                  
                </button>
              ))
          }
        </div>
    );
});

export default Submenu;