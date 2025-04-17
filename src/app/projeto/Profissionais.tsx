import Image from 'next/image';
import React from 'react';

const Profissionais: React.FC = () => {
    return (
        <div className="col-span-9 bg-[#234C43] row-span-12 grid grid-rows-12 relative overflow-hidden">
            <div className='row-span-10 w-full h-full relative min-w-[2000px] overflow-scroll no-scrollbar'>
                <Image src="/projeto/image-scroll.png" alt="Imagem de Implantação" fill className="object-contain min-w-[2500px] object-left" />
            </div>
            
      <div className=" row-span-2"></div>
    </div>
    );
};

export default Profissionais;