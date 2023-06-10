import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../components/Svg/CloseIcon";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  const navigator = useNavigate();

  const onClose = () => {
    navigator(-1);
  };

  useEffect(() => {
    document.body.style.cssText = "overflow:hidden;padding-right:16px";
    return () => {
      document.body.style.cssText = "overflow:unset,padding-right:0";
    };
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="modal-wrapper">
          <div className="modal__close" onClick={onClose}>
            <CloseIcon />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
