import React from "react";
import { Route } from "react-router-dom";

import { Explore, About, Work } from "./pages";
import { Nav } from "./components/Nav";

function App() {
  const [itachiVisibility, setItachiVisibility] = React.useState(true);

  const itachiRef = React.useRef<HTMLImageElement>(null);

  const handleItachiVisibilty = () => {
    setItachiVisibility(true);

    setTimeout(() => {
      itachiRef.current?.classList.add("visibility");
    }, 1800);

    setTimeout(() => {
      itachiRef.current?.classList.remove("visibility");
      setItachiVisibility(false);
    }, 2300);
  };

  React.useEffect(() => {
    setItachiVisibility(false)
  }, []);

  return (
    <>
      {itachiVisibility && (
        <img ref={itachiRef} className="itachi" src="/static/gif/itachi.gif" alt="itachi" />
      )}
      <Nav pageTrans={handleItachiVisibilty} />
      <div className="wrapper">
        <Route path="/" exact component={Explore} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </div>
    </>
  );
}

export default App;
