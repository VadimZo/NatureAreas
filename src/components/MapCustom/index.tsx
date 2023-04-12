import React from "react";
import { GeoJson, Map, Marker, Point } from "pigeon-maps";
import locationIcon from "../../assets/location-icon.svg";
import "./index.scss";
import { AreaItems } from "../../constants";

export default function MapCustom({
  coordinates,
  geometryArea,
}: Pick<AreaItems, "coordinates" | "geometryArea">) {
  return (
    <Map
      height={300}
      defaultCenter={coordinates as Point}
      maxZoom={9}
      defaultZoom={9}
    >
      <GeoJson data={geometryArea} />
      <Marker width={50} anchor={coordinates as Point}>
        <MarkerCustom />
      </Marker>
    </Map>
  );
}

export const MarkerCustom = () => {
  return (
    <div className="map_page_marker_container">
      <img src={locationIcon} className="map_page_marker_img" />
    </div>
  );
};
