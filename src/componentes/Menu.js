import React from "react";

function Menu() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io"></a>
          <h1 className="title">Indice</h1>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
