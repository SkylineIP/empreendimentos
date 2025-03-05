import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from '@mui/icons-material/Close';

interface ImagemAmpliadaProps {
  imagem: string;
  setVisible: (imgPath: string) => void;
  visible: string;
}

//definir arrays de imagens
//conjunto de imagens 1
const example1 = Array.from(
  { length: 26 },
  (_, i) => `/example${i + 1}.jpg`
);

//conjunto de imagens 2 etc
const example2 = Array.from(
  { length: 23 },
  (_, i) => `/example${i + 1}.jpg`
);

export default function ImagemAmpliada({
  imagem,
  setVisible,
  visible,
}: ImagemAmpliadaProps) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(imagem);
  const [imagens, setImagens] = useState(example1);

useEffect(() => {
  setImagens(imagem.includes("example") ? example1 : example2);
  setImage(imagem);
}, [imagem, imagens]);
  useEffect(() => {
    if (visible === "block") {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      setLoading(true);
    }
  }, [visible]);

  function handlePrevious() {
    imagens.forEach((item, index) => {
      if (item === image) {
        setImage(imagens[index - 1]);
      }
    });
  }

  function handleForward() {
    imagens.forEach((item, index) => {
      if (item === image) {
        setImage(imagens[index + 1]);
      }
    });
  }

  return (
    <>
      {loading ? (
        <div className="w-full h-screen absolute flex items-center justify-center p-8 bg-[#000000]/80 z-50">
          <CircularProgress />
        </div>
      ) : (
        <div
          className={`${visible} w-full h-screen absolute flex items-center justify-center p-8 bg-[#000000]/80 z-50`}
        >
          <div className="w-full h-full relative">
            <Image
              key={image}
              src={image}
              alt="Full screen image"
              className="object-contain animate-fade-up"
              fill
              priority
            />
            <div className="absolute bottom-5 left-[50%] cursor-pointer bg-secondary p-4 rounded-full border-2 border-[#B29A83]">
              <CloseIcon
              width={50}
              height={50}
              onClick={() => setVisible("hidden")}
            />
            </div>
            
            <div className="absolute bottom-[50%] left-[10%] cursor-pointer bg-secondary p-4 rounded-full border-2 border-[#B29A83]" onClick={() => handlePrevious()}>
              <ArrowBackIosNewIcon
                width={75}
                height={75}

              />
            </div>
            <div className="absolute bottom-[50%] right-[10%] cursor-pointer bg-secondary p-4 rounded-full border-2 border-[#B29A83]" onClick={handleForward}>
              <ArrowForwardIosIcon
                width={75}
                height={75}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
