import React from "react";

const Ultratour: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <iframe
        src="https://skylineip.s3.sa-east-1.amazonaws.com/Tour+Virtual/dresden/altez/index-tela.htm"
        className="absolute top-0 left-0 w-full h-full"
        title="ultratour"
      ></iframe>
    </div>
  );
};

export default Ultratour;
