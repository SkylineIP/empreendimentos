import Image from "next/image";

interface ImagemAmpliadaDoBolotario {
  setOpenImage: (open: boolean) => void;
  legenda: string;
  tipo: string;
  setImageDestaque: (imageDestaque: number) => void;
}

const arrayLegenda = [
    { title: "1. LOBBY", caminho: "/imagens/areas-comuns/Imagem-Expandida-4.png" },
    { title: "3. GUARITA", caminho: "/imagens/areas-comuns/Imagem-Expandida-3.png" },
    { title: "4. SALÃO DE FESTAS", caminho: "/imagens/areas-comuns/Imagem-Expandida-5.png" },
    { title: "5. ÁREA EXTERNA SALÃO DE FESTAS", caminho: "/imagens/areas-comuns/Imagem-Expandida-6.png" },
    { title: "7. ESPAÇO DELIVERY", caminho: "/imagens/areas-comuns/Imagem-Expandida-7.png" },
    { title: "8. MINI MARKET", caminho: "/imagens/areas-comuns/Imagem-Expandida-8.png" },
    { title: "13. WORK SPACE", caminho: "/imagens/areas-comuns/Imagem-Expandida-9.png" },
    { title: "14. INFLUENCER SPACE", caminho: "/imagens/areas-comuns/Imagem-Expandida-10.png" },
    { title: "15. SALA DE REUNIÕES", caminho: "/imagens/areas-comuns/Imagem-Expandida-11.png" },
    { title: "17. BICICLETÁRIO", caminho: "/imagens/areas-comuns/Imagem-Expandida-16.png" },
    { title: "18. VAGA PARA CARREGAMENTO RÁPIDO - USO COMUM", caminho: "/imagens/areas-comuns/Imagem-Expandida-13.png" },
    { title: "19. PET PLACE", caminho: "/imagens/areas-comuns/Imagem-Expandida-12.png" },
    { title: "20. PLAYGROUND", caminho: "/imagens/areas-comuns/Imagem-Expandida-14.png" },
    { title: "21. MINI CAMPO GRAMADO", caminho: "/imagens/areas-comuns/Imagem-Expandida-15.png" },

    { title: "4. SALÃO DE JOGOS", caminho: "/imagens/areas-comuns/Imagem-Expandida-18.png" },
    { title: "5. BRINQUETODECA", caminho: "/imagens/areas-comuns/Imagem-Expandida-19.png" },
    { title: "6. PLAYGROUND", caminho: "/imagens/areas-comuns/Imagem-Expandida-14.png" },
    { title: "7. PRAÇA DO VIOLÃO", caminho: "/imagens/areas-comuns/Imagem-Expandida-30.png" },
    { title: "8. PRAÇA RELAX", caminho: "/imagens/areas-comuns/Imagem-Expandida-21.png" },
    { title: "10. PISCINA ADULTO", caminho: "/imagens/areas-comuns/Imagem-Expandida-23.png" },
    { title: "11. PISCINA INFANTIL", caminho: "/imagens/areas-comuns/Imagem-Expandida-24.png" },
    { title: "12. SAUNA", caminho: "/imagens/areas-comuns/Imagem-Expandida-25.png" },
    { title: "13. SALA DE MASSAGEM", caminho: "/imagens/areas-comuns/Imagem-Expandida-22.png" },
    { title: "14. SPA", caminho: "/imagens/areas-comuns/Imagem-Expandida-25.png" },
    { title: "15. RELAX", caminho: "/imagens/areas-comuns/Imagem-Expandida-25.png" },
    { title: "16. ACADEMIA", caminho: "/imagens/areas-comuns/Imagem-Expandida-27.png" },
    { title: "17. CHURRASQUEIRA", caminho: "/imagens/areas-comuns/Imagem-Expandida-20.png" },
    { title: "18. MINI QUADRA", caminho: "/imagens/areas-comuns/Imagem-Expandida-29.png" },
    { title: "19. QUADRA BEACH TÊNIS", caminho: "/imagens/areas-comuns/Imagem-Expandida-26.png" },
];

const ImagemAmpliadaDoBolotario: React.FC<ImagemAmpliadaDoBolotario> = ({
  setOpenImage,
  legenda,
  tipo,
  setImageDestaque
}) => {
  const tipoSelected = tipo === "Térreo" ? "apt" : "areas-comuns";
  const imageIndex = arrayLegenda.findIndex((item) => item.title === legenda);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-foreground z-50 flex flex-col justify-center items-center font-[Montserrat] p-16 gap-y-8">
      <div className="w-full h-full bg-foreground rounded-3xl relative text-white">
        <Image
          src={arrayLegenda[imageIndex].caminho}
          alt={`/imagens/${tipoSelected}/${imageIndex}.png`}
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="bg-background rounded-3xl relative flex w-full h-28 justify-between items-center overflow-hidden">
        <div className="flex justify-between gap-x-8 px-12 relative w-2 h-12">
          <button onClick={() => {
            setOpenImage(false);
            setImageDestaque(-1);
          }}>
            <Image
              src="/projeto/implantacao/fechar-imagem-ampliada.svg"
              alt="botao para fechar"
              aria-label="fechar"
              fill
              className="object-contain"
            />
          </button>
        </div>
        <div className="absolute right-1/2 translate-x-1/2">
          <h1 className="font-extrabold text-3xl grow-[10]">
            {arrayLegenda[imageIndex].title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImagemAmpliadaDoBolotario;
