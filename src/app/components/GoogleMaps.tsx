"use client";

import { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Image from "next/image";

const GoogleMap = () => {
  const [isSatellite, setIsSatellite] = useState(true);
  //controla se o mapa é satélite ou 2D

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  // Certifique-se de que a chave da API está definida no arquivo .env.local
  // para não tenha configure o arquivo .env.local com a chave da API do Google Maps
  // o arquivo .env.local não sobe para produção, então você precisa configurar a chave da API no ambiente de produção também

  return (
    <div className="relative w-full h-full">
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100%", height: "100vh" }}
          defaultCenter={{ lat: -22.739496629856745, lng: -41.944472392281355 }}
          // coordenadas do centro do mapa
          // você pode substituir por outras coordenadas
          defaultZoom={15}
          // nível de zoom inicial do mapa
          disableDefaultUI={false}
          // desativa a interface padrão do Google Maps
          gestureHandling={"greedy"}
          // controla o comportamento de gestos do mapa
          mapTypeId={isSatellite ? "satellite" : "roadmap"}
          // controla se o mapa é satélite ou 2D
        >
          <Marker
            // marcador no mapa
            icon={{
              url: "/local/pin-resid.svg", // caminho do ícone
            }}
            position={{ lat: -22.739496629856745, lng: -41.944472392281355 }}
          />
        </Map>
      </APIProvider>

      {/* Botão de alternância do mapa */}
      <button
        className="absolute bottom-0 right-0 cursor-pointer"
        onClick={() => setIsSatellite(!isSatellite)}
      >
        <Image
          src={isSatellite ? "/local/mapa2d.svg" : "local/mapa-satelite.svg"}
          width={200}
          height={200}
          alt="mudar mapa entre 2d e satélite"
        />
      </button>
    </div>
  );
};

export default GoogleMap;
