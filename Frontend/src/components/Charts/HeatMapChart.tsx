// src/components/Charts/GeoHeatMap.tsx
"use client";
import L from "leaflet";
import "leaflet.heat";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function GeoHeatMap() {
  useEffect(() => {
    const map = L.map("map").setView([-26.3044, -48.8487], 13); // Joinville

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);

    const heatPoints = [
      [-26.3044, -48.8487],
      [-26.309, -48.846],
      [-26.3105, -48.85],
      [-26.305, -48.844],
      [-26.303, -48.847],
    ];

    const heatLayer = (L as any).heatLayer(heatPoints, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    });

    heatLayer.addTo(map);
  }, []);

  return <div id="map" className="h-[300px] rounded-2xl shadow-lg z-0" />;
}
