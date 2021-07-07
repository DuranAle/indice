import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cards from "./componentes/Cards";
import Navbar from "./componentes/Navbar";
import Menu from "./componentes/Menu";
import Formulario from "./componentes/Formulario";
import Texto from "./componentes/Texto";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar titulo="Portal Producciones" />
      <div className="App-contenedor"></div>
      <Router>
        <nav>
          <li>
            <Link to="/" />
            <Link to="/form" />
            <Link to="/txt" />
          </li>
        </nav>
        <Switch>
          <Route exact path="/form" component={Formulario} />
          <Route exact path="/txt" component={Texto} />
          <Route exact path="/" component={Cards} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
