"use client";

import { useEffect, useRef, useState } from "react";
import { useContextDefault } from "../../context/Context";

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isSatellite, setIsSatellite] = useState(false);
  const context = useContextDefault();
  const submenu = context?.submenu;

  const loadGoogleMaps = async () => {
    if (typeof window !== "undefined" && !window.google?.maps) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA1lrcqnzTlb1M-smMDB0ixzIE5sYXP40o`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  };

  const initMap = () => {
    if (mapRef.current && window.google) {
      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: -16.004796806902785, lng: -48.05758632370723 },
        zoom: 17,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "greedy",
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        mapTypeId: submenu === "MAPA 2D" ? "roadmap" : google.maps.MapTypeId.HYBRID,
      });

      // Adiciona um marcador personalizado
      new google.maps.Marker({
        position: { lat: -16.004796806902785, lng: -48.05758632370723 },
        map: newMap,
        icon: {
          url: "/loc/pin.svg", // Permite interações com um dedo
          scaledSize: new google.maps.Size(250, 250), // Set width and height
        } as google.maps.Icon, // Explicitly cast to avoid TypeScript errors
      });

      setMap(newMap);
    }
  };

  useEffect(() => {
    loadGoogleMaps();
  }, []);



  useEffect(() => {
    map?.setMapTypeId(isSatellite ? "roadmap" : google.maps.MapTypeId.HYBRID);
    if(submenu === "MAPA 2D") {
      setIsSatellite(false);
    } else {
      setIsSatellite(true);
    }
  }
  , [submenu]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" />

      {/* Botão de alternância do mapa */}
    </div>
  );
};

export default GoogleMap;