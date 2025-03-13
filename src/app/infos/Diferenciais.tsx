import React, { useState } from "react";
import Image from "next/image";

const Diferenciais: React.FC = () => {
  const [changeImage, setChangeImage] = useState(true);
  return (
    <div className="row-span-10 p-7">
      <div className="w-full h-full bg-[#AFA38B] relative  rounded-3xl overflow-hidden" key={`${changeImage}`}>
        <Image
          src={`${changeImage ? "/info/dif-1.png" : "/info/dif-2.png"} `}
          alt="ficha técnica"
          fill
          className="object-fill object-top"
        />
        <div className="absolute bottom-2 right-[50%] translate-x-1/2 p-2 gap-8 flex justify-center">
          <button onClick={() => setChangeImage(true)}>
            <Image
              src="/info/seta-esquerda.png"
              alt="change"
              width={50}
              height={50}
              className="object-contain object-top"
            />
          </button>
          <button onClick={() => setChangeImage(false)}>
            <Image
              src="/info/seta-direita.png"
              alt="change"
              width={50}
              height={50}
              className="object-contain object-top"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diferenciais;
