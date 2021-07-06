import React from "react";
import Search from "./Search";
import Buscador from "./Buscador";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="contenedor">
      <div className="subcontenedor">
        <div className="nombre">{props.titulo}</div>
        <div className="buscador"> </div>
        <Buscador />
      </div>
    </div>
  );
}

export default Navbar;
