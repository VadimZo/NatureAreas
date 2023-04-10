import React from "react";
import Logo from "../../assets/logo.png";
import "./index.scss";

export default function Navigation() {
  return (
    <nav className="navigation">
      <img className="logo" src={Logo} />
    </nav>
  );
}
