import React from "react";

function Card(props) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{props.titulo}</p>
        <button className="card-header-icon" aria-label="more options"></button>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Informacio
        </a>
      </footer>
    </div>
  );
}

export default Card;
