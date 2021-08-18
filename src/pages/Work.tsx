import React, { Suspense } from "react";
import useDelayRouteExit from "delay-react-route-exit";

const RecentProjects = React.lazy(() => import("@components/RecentProjects"));
const PetProjects = React.lazy(() => import("@components/PetProjects"));

const Work = () => {
  useDelayRouteExit(500);

  return (
    <div className="work">
      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        <RecentProjects />
      </Suspense>
      <Suspense fallback={<h2 className="loading">Loading...</h2>}>
        <PetProjects />
      </Suspense>
    </div>
  );
};

export default Work;
