import React from "react";
import { Modal } from "../Modal";
import "./index.scss";

export default function ModalNatureArea() {
  return (
    <Modal>
      <Contacts />
    </Modal>
  );
}

const Contacts = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <ul className="contacts__list">
        <li className="contacts__list-item">
          <div>Адресс</div>
          <div>Адресс</div>
        </li>
        <li className="contacts__list-item">
          <div>Email</div>
          <div>Email</div>
        </li>
        <li className="contacts__list-item">
          <div>Телефон</div>
          <a type="tel">89251611952</a>
        </li>
      </ul>
    </div>
  );
};
