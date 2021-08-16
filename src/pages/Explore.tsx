import React from "react";
import useDelayRouteExit from "delay-react-route-exit";

import Queotes from "@components/Queotes";

const Explore = () => {
  useDelayRouteExit(500);

  return (
    <div className="Explore">
      <div className="quotes-slider">
        <Queotes />
      </div>
    </div>
  );
};

export default Explore;
