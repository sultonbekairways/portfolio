import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// import moduleName from ''

function Work() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("h1", {
      x: window.outerWidth - 200,
      // duration: 2,
      // rotation: 3600,
      scrollTrigger: {
        trigger: "",
        start: "top center",
        markers: true,
        toggleActions: "restart none reverse none",
      },
    });
  }, []);

  return (
    <div className="work">
      <div className="spacer"></div>
      <h1>Recent Projects</h1>
      <p>//Some real projecets with details</p>

      <div className="work-real">
        <div className="work-scn">
          <img src="work-real__img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Work;
