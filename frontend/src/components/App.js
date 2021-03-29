import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Sidebar from "./Sidebar.js";
import Home from "./Home.js";
import About from "./About.js";
import Fantasy from "./Fantasy.js";
import Compare from "./Compare";
import Stats from "./Stats.js";
import Player from "./Player.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/main.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main-container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              {" "}
              <Home />{" "}
            </Route>{" "}
            <Route path="/about">
              {" "}
              <About />
            </Route>
            <Route path="/fantasy">
              <Fantasy />
            </Route>
            <Route exact path="/stats">
              <Stats />
            </Route>
            <Route path="/compare">
              <Compare />
            </Route>
            <Route path="/stats/:id" children={<Player />}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
