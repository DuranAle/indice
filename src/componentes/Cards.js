import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Card from "./Card";
import "./Cards.css";
import Formulario from "./Formulario";

const cards = [
  {
    id: 1,
    titulo: "CATASTRO",
    url: "http://www.dpcneuquen.gov.ar/ITCSolicitarCuentaUsuario.asp",
  },
  {
    id: 2,
    titulo: "SiDesRu",
    url: "/txt",
  },
  {
    id: 3,
    titulo: "Marcas y señales",
    url: "/form",
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="columns is-gapless  is-centered">
        <div className="columns is-multiline is-half" key={cards.id}>
          {cards.map((card) => (
            <div className="column is-one-third">
              <Card titulo={card.titulo} url={card.url}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
