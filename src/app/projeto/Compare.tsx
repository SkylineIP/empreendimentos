"use client";

import React, { memo, useState } from "react";
import Image from "next/image";

const press = "bg-foreground text-background border-background";
// const notPress = "bg-[#F7EDDC] text-[#B29A83]"
const botoesCompare = [
  { text: "101 M² Padrão" },
  { text: "101 M² Opção 1" },
  { text: "122 M² Padrão" },
  { text: "122 M² Opção 1" },
  { text: "122 M² Opção 2" },
  { text: "150 M² Padrão" },
  { text: "150 M² Opção 1" },
  { text: "150 M² Opção 2" },
  { text: "111 M²" },
  { text: "129 M²" },
  { text: "208 M²" },
  { text: "281 M²" },
];

const Compare: React.FC = memo(function Compare() {
  const [pressaValidate, setpressValidate] = useState({
    pressOne: false,
    pressTwo: false,
  });
  const [pressFirst, setPressFirst] = useState(0);
  const [pressSecond, setPressSecond] = useState(0);
  const [compareOne, setCompareOne] = useState("/projeto/compare/mais.svg");
  const [compareTwo, setCompareTwo] = useState("/projeto/compare/mais.svg");
  const handlePress = (index: number) => {
    //validate if the press plant is already the comparision, if it is, take of the compare and unselected them
    if (pressFirst === index) {
      setpressValidate({ pressOne: false, pressTwo: pressaValidate.pressTwo });
      setPressFirst(0);
      setCompareOne("/projeto/compare/mais.svg");
      return;
    }
    if (pressSecond === index) {
      setpressValidate({ pressOne: pressaValidate.pressOne, pressTwo: false });
      setPressSecond(0);
      setCompareTwo("/projeto/compare/mais.svg");
      return;
    }
    if (
      pressaValidate.pressOne === false &&
      pressaValidate.pressTwo === false
    ) {
      setpressValidate({ pressOne: true, pressTwo: false });
      setPressFirst(index);
      setCompareOne(`/projeto/compare/plantas-full-${index}.png`);
    }
    if (pressaValidate.pressOne === true && pressaValidate.pressTwo === false) {
      setpressValidate({ pressOne: true, pressTwo: true });
      setPressSecond(index);
      setCompareTwo(`/projeto/compare/plantas-full-${index}.png`);
    }
    if (pressaValidate.pressOne === true && pressaValidate.pressTwo === true) {
      setpressValidate({ pressOne: true, pressTwo: false });
      setPressFirst(index);
      setCompareOne(`/projeto/compare/plantas-full-${index}.png`);
      setCompareTwo("/projeto/compare/mais.svg");
      setPressSecond(0);
    }
  };
  return (
    <div className="w-full h-full grid grid-rows-12 gap-6 p-12 pb-0 animate-fade animate-duration-[1000ms]">
      <div className="row-span-9 flex w-full h-full gap-x-12">
        <div className="w-full h-full bg-[#AFA38B]  border-4 border-foreground rounded-xl flex justify-center items-center">
          {compareOne == "/projeto/compare/mais.svg" ? (
            <Image
              src={compareOne}
              width={200}
              height={200}
              alt="sinal de mais"
            />
          ) : (
            <div className="relative w-full h-full p-10">
              <Image
                src={compareOne}
                fill
                alt="sinal de mais"
                className="object-contain animate-fade animate-duration-[1000ms]"
              />
            </div>
          )}
        </div>
        <div className="w-full h-full bg-[#AFA38B] border-4 border-foreground rounded-xl flex justify-center items-center">
          {compareTwo == "/projeto/compare/mais.svg" ? (
            <Image
              src={compareTwo}
              width={200}
              height={200}
              alt="sinal de mais"
            />
          ) : (
            <div className="relative w-full h-full p-10">
              <Image
                src={compareTwo}
                fill
                alt="sinal de mais"
                className="object-contain animate-fade animate-duration-[1000ms]"
              />
            </div>
          )}
        </div>
      </div>
      <div className="row-span-3 flex gap-4 overflow-x-auto custom-scrollbar overflow-y-hidden h-full">
        {botoesCompare.map((botao, index) => {
          return (
            <div
              key={index + botao.text}
              className={`
              col-span-1 w-full h-full rounded-lg flex flex-col cursor-pointer min-w-52 animate-fade animate-duration-[1000ms] pb-4`}
              onClick={() => handlePress(index + 1)}
            >
              <h2 className={`"font-bold text-lg w-full text-center border-4 border-foreground rounded-t-lg ${pressSecond === index + 1 && press}
              ${pressFirst === index + 1 && press}`}>
                {botao.text}
              </h2>
              <div className={`relative w-full h-full grow-[2] border-4 border-foreground border-t-0 rounded-b-lg ${pressSecond === index + 1 && press}
              ${pressFirst === index + 1 && press}`}>
                <Image
                  src={`/projeto/compare/planta-mini-${index+1}.png`}
                  className="object-contain p-4"
                  fill
                  alt="sinal de mais"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Compare;
