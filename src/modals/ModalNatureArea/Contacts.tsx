import React from "react";
import MapCustom from "../../components/MapCustom";
import { AreaItems } from "../../constants";

export const Contacts = ({
  email,
  adress,
  phone,
  coordinates,
  geometryArea,
}: Pick<
  AreaItems,
  "email" | "adress" | "phone" | "coordinates" | "geometryArea"
>) => {
  return (
    <div className="contacts">
      {(email || adress || phone) && (
        <>
          <h2 className="contacts__title">Контакты</h2>
          <ul className="contacts__list">
            {adress && (
              <li className="contacts__list-item">
                <div>Адрес:</div>
                <div className="contacts__list-right">{adress}</div>
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
      <MapCustom coordinates={coordinates} geometryArea={geometryArea} />
    </div>
  );
};
