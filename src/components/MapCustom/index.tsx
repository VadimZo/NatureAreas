import React from "react";
import { GeoJson, Map, Marker, Point } from "pigeon-maps";
import locationIcon from "../../assets/location-icon.svg";
import "./index.scss";
import { maxZoomChanger } from "./maxZoomChanger";
import { AreaItems } from "../../types";

interface MapCustomProps<T extends AreaItems> {
  coordinates: T["coordinates"];
  geometryArea: T["geometryArea"];
}

export default function MapCustom<T extends AreaItems>({
  coordinates,
  geometryArea,
}: MapCustomProps<T>) {
  return (
    <Map
      height={350}
      defaultCenter={coordinates as Point}
      maxZoom={maxZoomChanger(coordinates?.[0])}
      defaultZoom={maxZoomChanger(coordinates?.[0])}
    >
      <GeoJson data={geometryArea} />
      <Marker width={35} anchor={coordinates as Point}>
        <MarkerCustom />
      </Marker>
    </Map>
  );
}

export const MarkerCustom = () => {
  return (
    <div className="map_page_marker_container">
      <img src={locationIcon} alt="Location" className="map_page_marker_img" />
    </div>
  );
};
