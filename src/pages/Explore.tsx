import React, { Suspense } from "react";
import useDelayRouteExit from "delay-react-route-exit";

// import { Preloader } from "@components/Preloader";

const QueotesComponent = React.lazy(() => import("@components/Quotes"));
const CubeComponent = React.lazy(() => import("@components/Cube"));

const Explore = () => {
  useDelayRouteExit(500);

  return (
    <div className="Explore">
      <div className="quotes">
        <div className="p-15">
          <h2>Life Quotes</h2>
          <p className="subtitle">#My favorite quotes for life</p>
        </div>
        <Suspense fallback={<h2 className="loading">Loading...</h2>}>
          <QueotesComponent />
        </Suspense>
      </div>

      <div className="hobbies">
        <div className="p-15">
          <h2>Hobbies</h2>
          <p className="subtitle">#Leisure time activities</p>
        </div>
        <Suspense fallback={<h2 className="loading">Loading...</h2>}>
          <CubeComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Explore;
