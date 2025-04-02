import { useContextDefault } from "@/context/Context";
import Image from "next/image";




const TelaCheia: React.FC = () => {
    const context = useContextDefault();
    const abrirImagensTelaCheia = context?.abrirImagensTelaCheia;
    const setAbrirImagensTelaCheia = context?.setAbrirImagensTelaCheia;

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/90 z-50 flex flex-col justify-center items-center font-[Montserrat] p-16 gap-y-8">
      <div className="w-full h-full rounded-3xl relative text-white">
        <Image
          src={abrirImagensTelaCheia?.pathImage || ""}
          alt="Imagem Ampliada"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="absolute right-8 top-8">
          <button onClick={() => {
            setAbrirImagensTelaCheia?.({open: false, pathImage: ""});
          }}>
            <Image
              src="/menu/max-pressed.svg"
              alt="botao para fechar"
              aria-label="fechar"
              width={50}
              height={50}
              className="object-contain"
            />
          </button>
      </div>
    </div>
  );
};

export default TelaCheia;
