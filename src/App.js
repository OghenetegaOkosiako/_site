import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import Contact from "./components/Contact";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {" "}
          <Route path="/" exact render={() => <Home />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
