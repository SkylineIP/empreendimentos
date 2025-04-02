import React, { useState }  from "react";
import Image from "next/image";

const arrayNomesBotoes = [
  { title: "101 M²", subBtn: [{title: "PADRÃO", caminho: '101m-padrao', legenda: 'legenda-1'}, {title: "OPÇÃO 1", caminho: '101m-opcao1' , legenda: 'legenda-2'}, {title: "TOUR VIRTUAL", caminho: '101m-tour', legenda: 'legenda-3' }], caminho: "101m-padrao", legenda: 'legenda-1' },
  { title: "122 M²", subBtn: [{title: "PADRÃO", caminho: '122m-padrao', legenda: 'legenda-4'}, {title: "OPÇÃO 1", caminho: '122m-opcao1', legenda: 'legenda-5'}, {title: "OPÇÃO 2", caminho: '122m-opcao2', legenda: 'legenda-6'}, {title: "TOUR VIRTUAL", caminho: '122m-tour', legenda: 'legenda-7'}], caminho: "122m-padrao", legenda: 'legenda-4' },
  { title: "150 M²", subBtn: [{title: "PADRÃO", caminho: '150m-padrao', legenda: 'legenda-8'}, {title: "OPÇÃO 1", caminho: '150m-opcao1', legenda: 'legenda-9'}, {title: "OPÇÃO 2", caminho: '150m-opcao2', legenda: 'legenda-10'}, {title: "OPÇÃO 3", caminho: '150m-opcao3', legenda: 'legenda-11'}, {title: "TOUR VIRTUAL", caminho: '150m-tour', legenda: 'legenda-12'}], caminho: "150m-padrao", legenda: 'legenda-8' },
  { title: "111 M²", subBtn: [], caminho: "111m", legenda: 'legenda-13' },
  { title: "129 M²", subBtn: [], caminho: "129m", legenda: 'legenda-14' },
  { title: "GARDEN - 208 M²", subBtn: [], caminho: "208m", legenda: 'legenda-15' },
  { title: "PENTHOUSE - 281 M²", subBtn: [], caminho: "281m", legenda: 'legenda-16' },
];

const btnPlantasPressed = "bg-[#896337] text-[#E2DED2] border-4 border-[#896337]";
const btnPlantas = "border-4 border-[#896337] text-[#896337]";

const btnSubmenuPlantasPressed = "bg-[#896337] text-[#E2DED2] border-2 border-[#896337]";
const btnSubmenuPlantas = "border-2 border-[#896337] text-[#896337]";

const Plantas: React.FC = () => {
  const [btnPressed, setBtnPressed] = useState(0);
  const [btnSubmenuPressed, setSubmenuPressed] = useState(0);
  const [plantaSelected, setPlantaSelected] = useState('101m-padrao');
  const [legendaPlantas, setLegendaPlantas] = useState('legenda-1');
  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-12 items-center pb-0 pr-0 relative overflow-hidden">
      <div className="w-full h-full col-span-12 row-span-2"></div>
      <div className="div-1 flex flex-col items-left justify-between col-span-5 p-10 row-span-12 w-full h-full">
          <Image
            src={`/projeto/plantas/${legendaPlantas}.png`}
            alt="legenda"
            width={600}
            height={400}
            className="object-contain animate-fade animate-duration-[2000ms] animate-ease-in-out"
          />
        <div className="flex flex-col justify-between overflow-y-auto custom-scrollbar w-3/4 h-full pr-12">
          {arrayNomesBotoes.map((item, index) => (
            <div key={index} className="flex flex-col justify-between flex-wrap h-full w-full gap-y-8 mt-8">
              <button className={`flex items-center justify-center h-14 p-2 rounded-lg text-2xl ${index === btnPressed ? btnPlantasPressed : btnPlantas}`} onClick={() => {
                setBtnPressed(index);
                 setSubmenuPressed(0);
                 setPlantaSelected(item.caminho);
                setLegendaPlantas(item.legenda);
                 }}>
                <p>{item.title}</p>
              </button>
              {(btnPressed === index && item.subBtn.length > 0) && (
                <div className="grid grid-cols-2 gap-4  gap-y-8 animate-fade-up animate-duration-[2000ms] animate-ease-in-out " key={`${item.title}`}>
                {item.subBtn &&
                  item.subBtn.map((sub, i) => (
                    <button
                      key={sub.title + i}
                      className={`flex items-center justify-center p-1 rounded-lg w-full text-sm px-10 ${i === btnSubmenuPressed ? btnSubmenuPlantasPressed : btnSubmenuPlantas}`}
                      onClick={() => {
                        setSubmenuPressed(i); 
                        setPlantaSelected(sub.caminho);
                        setLegendaPlantas(sub.legenda);
                      }}
                      disabled={sub.title === "TOUR VIRTUAL"}
                    >
                      <p>{sub.title}</p>
                    </button>
                  ))}
              </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
      <div className="div-2 w-full h-full relative col-span-7 row-span-12 animate-fade-up animate-duration-[2000ms] animate-ease-in-out" key={`${plantaSelected}`}>
        <Image
          src={`/projeto/plantas/${plantaSelected}.png`}
          alt="implantacao"
          fill
          className="object-contain p-10 pl-0"
        />
      </div>
    </div>
  );
};

export default Plantas;
