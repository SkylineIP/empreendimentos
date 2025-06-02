import React from "react";

const Ultratour: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <iframe
        src="https://tour.ultratour.com.br/dresden/altez/index.htm?media-index=2"
        className="absolute top-0 left-0 w-full h-full"
        title="ultratour"
      ></iframe>
    </div>
  );
};

export default Ultratour;
