import React from "react";
import Cards from "./componentes/Cards";
import Navbar from "./componentes/Navbar";
import Menu from "./componentes/Menu";
import Formulario from "./componentes/Formulario";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar titulo="Portal Producciones" />
      {/* <Menu />*/}
      <Cards />
    </div>
  );
}

export default App;
