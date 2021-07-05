import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    titulo: "CATASTRO",
    url: "",
  },
  {
    id: 2,
    titulo: "SiDesRu",
    url: "",
  },
  {
    id: 3,
    titulo: "Marcas y señales",
    url: "",
  },
  {
    id: 4,
    titulo: "NN",
    url: "",
  },
  {
    id: 5,
    titulo: "555",
    url: "",
  },
  {
    id: 6,
    titulo: "666",
    url: "",
  },
];

function Cards() {
  return (
    <div className="container">
      <div className="columns is-gapless  ">
        <div className="columns is-multiline" key={cards.id}>
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
