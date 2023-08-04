import React from "react";
import MapCustom from "../../components/MapCustom";
import { AreaItems } from "../../types";

export const Contacts = ({
  email,
  address,
  phone,
  coordinates,
  geometryArea,
}: Pick<
  AreaItems,
  "email" | "address" | "phone" | "coordinates" | "geometryArea"
>) => {
  return (
    <div className="contacts">
      {(email || address || phone) && (
        <>
          <h2 className="contacts__title">Контакты</h2>
          <ul className="contacts__list">
            {address && (
              <li className="contacts__list-item">
                <div>Адрес:</div>
                <div className="contacts__list-right">{address}</div>
              </li>
            )}
            {email && (
              <li className="contacts__list-item">
                <div>Email:</div>
                <div className="contacts__list-right">{email}</div>
              </li>
            )}
            {phone && (
              <li className="contacts__list-item">
                <div>Телефон:</div>
                <a type="tel" className="contacts__list-right">
                  {phone}
                </a>
              </li>
            )}
          </ul>
        </>
      )}
      <MapCustom<AreaItems> coordinates={coordinates} geometryArea={geometryArea} />
    </div>
  );
};
