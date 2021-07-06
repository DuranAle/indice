import React from "react";
import Card from "./Card";
import "./Cards.css";

const cards = [
  {
    id: 1,
    titulo: "CATASTRO",
    url: "http://www.dpcneuquen.gov.ar/ITCSolicitarCuentaUsuario.asp",
  },
  {
    id: 2,
    titulo: "SiDesRu",
    url: "https://translate.google.com.ar/?hl=es-419&tab=TT",
  },
  {
    id: 3,
    titulo: "Marcas y señales",
    url: "www.ole.com.ar",
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="columns is-gapless  is-centered">
        <div className="columns is-multiline is-half" key={cards.id}>
          {cards.map((card) => (
            <div className="column is-one-third">
              <Card titulo={card.titulo}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
