import React from "react";
import { Modal } from "../Modal";
import "./index.scss";
import { Contacts } from "./Contacts";
import { useLocation, useNavigate } from "react-router-dom";
import { AreaItems } from "../../constants";
import { ImagesGalary } from "../../components/ImageGalary";

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
    images,
    description,
    adress,
    email,
    phone,
    coordinates,
    geometryArea,
    mainInformation,
  } = areaInfo || {};

  return (
    <Modal>
      <h2 className="tac">{name}</h2>
      <div className="nature-main">
        <ImagesGalary images={images} />
        <p className="nature-main__desc">{description}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: mainInformation || "" }} />

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
