import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Our_cars from "./components/Our_cars";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        {/* <Route path="/appointments">
          <CreateAppointment />
        </Route> */}

        <Route path="/our_cars">
          <Our_cars />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
