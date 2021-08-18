import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RecentProjects = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images: HTMLImageElement[] = gsap.utils.toArray(".work__img");
    const worksInfo: HTMLDivElement[] = gsap.utils.toArray(".work-item__info");

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
    <div className="p-15">
      <h1>Recent Projects</h1>
      <p className="subtitle">#Some real projecets with details</p>

      <div className="work-real">
        <a href="https://www.scnsoft.com/" className="work-scn work-item">
          <img src="/static/work/scn.jpg" alt="scn" className="work__img" />
          <div className="work-item__info">
            <h2>ScienceSoft</h2>
            <span>#2021 - commerce</span>
            <p>SOFTWARE CONSULTING AND DEVELOPMENT FOR DIGITAL SUCCESS</p>
          </div>
        </a>
        <a href="https://proweb.uz/" className="work-proweb work-item">
          <img
            src="/static/work/proweb.jpg"
            alt="proweb"
            className="work__img"
          />
          <div className="work-item__info">
            <h2>Proweb</h2>
            <span>#2021 - design project</span>
            <p>Modern art center</p>
          </div>
        </a>
        <a href="https://multicake.uz/" className="work-multicake work-item">
          <img
            src="/static/work/multicake.jpg"
            alt="multicake"
            className="work__img"
          />
          <div className="work-item__info">
            <h2>Multicake</h2>
            <span>#2021 - small commerce</span>
            <p>cakes with customer design</p>
          </div>
        </a>
      </div>
    </div>
  );
};
export default RecentProjects;
