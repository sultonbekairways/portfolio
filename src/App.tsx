import React from "react";
import { Route } from "react-router-dom";

import { Home, About, Work } from "./pages";
import Nav from "./components/Nav";
import itachi from "./assets/gif/itachi.gif";


function App() {
  const [itachiVisibility, setItachiVisibility] = React.useState(false);

  const handleItachiVisibilty = () => {
    setItachiVisibility(true);
    setTimeout(() => {
      setItachiVisibility(false)
    }, 2300);
  };

  return (
    <>
      {itachiVisibility && (
        <img
          className="itachi"
          src={itachi}
          alt=""
        />
      )}
      <Nav pageTrans={handleItachiVisibilty}/>
      <div className="wrapper" >
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </div>
    </>
  );
}

export default App;
