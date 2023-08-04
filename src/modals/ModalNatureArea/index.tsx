import React from "react";
import { Modal } from "../Modal";
import "./index.scss";
import { Contacts } from "./Contacts";
import { useLocation, useNavigate } from "react-router-dom";
import { ImagesGalary } from "../../components/ImageGalary";
import { FilesTable } from "./FilesTable";
import { AreaItems } from "../../types";

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
    address: address,
    email,
    phone,
    coordinates,
    geometryArea,
    htmlInfo,
    files,
  } = areaInfo || {};

  return (
    <Modal>
      <h2 className="tac">{name}</h2>
      <div className="nature-main">
        <ImagesGalary images={images} />
        <p className="nature-main__desc">{description}</p>
      </div>
      <p
        className="nature-main__html"
        dangerouslySetInnerHTML={{ __html: htmlInfo || "" }}
      ></p>

      {files && (
        <>
          <h3>Нормативная правовая основа функционирования ООПТ:</h3>
          <FilesTable files={files} />
        </>
      )}

      <Contacts
        address={address}
        email={email}
        phone={phone}
        coordinates={coordinates}
        geometryArea={geometryArea}
      />
    </Modal>
  );
}
