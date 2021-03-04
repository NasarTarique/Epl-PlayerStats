import React, { useState, useEffect } from "react";
import { render } from "react-dom"
import Sidebar from './Sidebar.js';
import Home from './Home.js';
import About from './About.js';
import Fantasy from './Fantasy.js';
import Stats from './Stats.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/main.css'

function App() {
  return (
		  <Router>
		  <div className="main-container">
				  <Sidebar />
				  <Switch>
						  <Route exact path="/">
								  <Home />
						  </Route>
						  <Route path="/about">
								  <About />
						  </Route>
						  <Route path="/fantasy">
								  <Fantasy />
						  </Route>
						  <Route path="/stats">
								  <Stats />
						  </Route>
				  </Switch>
		  </div>
		  </Router>
  );
}

export default App;
const container = document.getElementById("app");
render(<App />, container);
