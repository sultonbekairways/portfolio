import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import scn from "@assets/img/scn.jpg";
import proweb from "@assets/img/proweb.jpg";
import multicake from "@assets/img/multicake.jpg";

function Work() {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images: Array<HTMLImageElement> = gsap.utils.toArray(".work__img");
    const worksInfo: Array<HTMLDivElement> =
      gsap.utils.toArray(".work-item__info");

    ScrollTrigger.defaults({
      toggleActions: "restart none reverse none",
    });

    images.forEach((img, index) => {
      const trigger = ScrollTrigger.create({
        trigger: img,
        start: "top 26%",
        end: "top 26%",
        onEnter: () => img?.classList.add("opacity"),
        onLeaveBack: () => img?.classList.remove("opacity"),
      });

      gsap.to(img, {
        xPercent: 130,
        duration: 0.5,
        rotate: 360,
        scrollTrigger: trigger,
      });

      gsap.to(worksInfo[index], {
        xPercent: -70,
        duration: 0.5,
        scrollTrigger: trigger,
      });
    });
  }, []);

  return (
    <div className="work">
      <h1>Recent Projects</h1>
      <p className="subtitle">#Some real projecets with details</p>

      <div className="work-real">
        <div className="work-scn work-item">
          <img src={scn} alt="scn" className="work__img" />
          <div className="work-item__info">
            <h2>ScienceSoft</h2>
            <span>#2021 - commerce</span>
            <p>SOFTWARE CONSULTING AND DEVELOPMENT FOR DIGITAL SUCCESS</p>
          </div>
        </div>
        <div className="work-proweb work-item">
          <img src={proweb} alt="proweb" className="work__img" />
          <div className="work-item__info">
            <h2>Proweb</h2>
            <span>#2021 - design project</span>
            <p>Modern art center</p>
          </div>
        </div>
        <div className="work-multicake work-item">
          <img src={multicake} alt="multicake" className="work__img" />
          <div className="work-item__info">
            <h2>Multicake</h2>
            <span>#2021 - small commerce</span>
            <p>cakes with customer design</p>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default Work;
