import React, { useState } from "react";
import Image from "next/image";

const Institucional: React.FC = () => {
  const [changeImage, setChangeImage] = useState(0);

  const handleImage = (type: string) => {
    if (changeImage !== 0 && type === "left") {
      setChangeImage(changeImage - 1);
    }

    if (changeImage !== 2 && type === "right") {
      setChangeImage(changeImage + 1);
    }
  };

  const array = ["/info/inst-1.png", "/info/inst-2.png", "/info/inst-3.png"];

  return (
    <div className="row-span-10 p-7">
      <div
        className="w-full h-full bg-[#AFA38B] relative  rounded-3xl overflow-hidden"
        key={`${changeImage}`}
      >
        <Image
          src={array[changeImage]}
          alt="ficha técnica"
          fill
          className="object-contain object-top"
        />
        <div className="absolute bottom-10 right-[50%] translate-x-1/2 p-2 gap-8 flex justify-center">
          <button onClick={() => handleImage("left")}>
            <Image
              src="/info/seta-esquerda.png"
              alt="change"
              width={50}
              height={50}
              className={`object-contain object-top ${
                changeImage === 0 ? "opacity-20" : "opacity-100"
              }`}
            />
          </button>
          <button onClick={() => handleImage("right")}>
            <Image
              src="/info/seta-direita.png"
              alt="change"
              width={50}
              height={50}
              className={`object-contain object-top ${
                changeImage === 2 ? "opacity-20" : "opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Institucional;
