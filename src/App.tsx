import React from "react";
import { Route } from "react-router-dom";

import {Home, About, Work} from './pages'
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </div>
    </>
  );
}

export default App;
