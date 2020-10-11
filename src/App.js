import React from "react";
import Navbar from "./Components/Navbar";
import Health from "./Components/Health";
import Sports from "./Components/Sports";
import Entertainment from "./Components/Entertainment";
import Technology from "./Components/Technology";
import Business from "./Components/Business";
import Science from "./Components/Science";
import Home from "./Components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/entertainment" component={Entertainment} />
          <Route exact path="/science" component={Science} />
          <Route exact path="/sports" component={Sports} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/technology" component={Technology} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
