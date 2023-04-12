import React from "react";
import { Modal } from "../Modal";
import "./index.scss";
import { Contacts } from "./Contacts";
import { useLocation, useNavigate } from "react-router-dom";
import { AreaItems } from "../../constants";

export default function ModalNatureArea() {
  const location = useLocation();
  const navigate = useNavigate();
  const areaInfo = location.state?.areaInfo as AreaItems;

  if (!areaInfo) {
    navigate("/");
    return <></>;
  }

  const {
    name,
    image,
    description,
    adress,
    email,
    phone,
    coordinates,
    geometryArea,
  } = areaInfo || {};

  return (
    <Modal>
      <h2 className="tac">{name}</h2>
      <div className="nature-main">
        <img className="nature-main__img" src={image} />
        <p className="nature-main__desc">{description}</p>
      </div>

      <Contacts
        adress={adress}
        email={email}
        phone={phone}
        coordinates={coordinates}
        geometryArea={geometryArea}
      />
    </Modal>
  );
}
