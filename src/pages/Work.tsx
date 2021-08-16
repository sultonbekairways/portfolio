import React from "react";
import useDelayRouteExit from "delay-react-route-exit";

import { RecentProjects } from "@components/RecentProjects";
import { PetProjects } from "@components/PetProjects";

const Work = () => {
  useDelayRouteExit(500);

  return (
    <div className="work">
      <RecentProjects />
      <PetProjects />
    </div>
  );
};

export default Work;
