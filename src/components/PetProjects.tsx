import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

export const PetProjects = () => {
  const landingWrapper = React.useRef<HTMLDivElement>(null);
  const landingInnerWrapper = React.useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollToPlugin);

  const tl = gsap.timeline({
    paused: true,
  });

  React.useEffect(() => {
    tl.to(".landing-box", {
      y: -210,
      duration: 0.4,
      stagger: {
        each: 0.1,
      },
    });
  }, [tl]);

  function startSlider() {
    tl.play();
  }

  function stopSlider() {
    tl.reverse();
  }

  function moveSlider(e: React.MouseEvent) {
    if (e.clientX > (landingWrapper.current?.clientWidth ?? 0) / 2) {
      gsap.to(".landing-wrapper", {
        scrollTo: {
          x: "+=250",
        },
        ease: "power2.out",
        duration: 2,
      });
    } else {
      gsap.to(".landing-wrapper", {
        scrollTo: {
          x: "-=250",
        },
        ease: "power2.out",
        duration: 2,
      });
    }
  }

  return (
    <>
      <div className="p-15">
        <h1>Pet Projects</h1>
        <p>#My favorite pet projecets with random background</p>
      </div>

      <div ref={landingWrapper} className="landing-wrapper">
        <div
          onMouseOver={startSlider}
          onMouseLeave={stopSlider}
          onMouseMove={moveSlider}
          ref={landingInnerWrapper}
          className="landing-inner-content"
        >
          <div className="landing-box">
            <div className="landing-box__content">
              <a href="https://sultonbekairways.github.io/react-pizza/">Demo</a>
              <img src="/static/petProjects/pet1.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>
                  Commerce (React, Redux, React-skeleton, PropTypes, Scss,
                  Axios)
                </p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              <a href="https://sultonbekairways.github.io/threejs-game/fps.html">Demo</a>
              <img src="/static/petProjects/pet2.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>Singleplayer shooter game (Three.js, only on PC)</p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              <a href="https://sultonbekairways.github.io/webSocket-soccer/public/index.html">Demo</a>
              <img src="/static/petProjects/pet3.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>Multiplayer soccer game (Three.js, Websocket, Node.js)</p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              {/* <a href="">Demo</a> */}
              <img src="/static/petProjects/pet4.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>Paint (React, Typescript, Redux, Redux-thunk)</p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              <a href="https://sultonbekairways-spacex.herokuapp.com/">Demo</a>
              <img src="/static/petProjects/pet5.png" alt="Pet-project" />
              <div className="landing-box__info">
                <p>SpaceX (React, GraphQl, React-Apollo)</p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              {/* <a href="/">Demo</a> */}
              <img src="/static/petProjects/pet6.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>Piano (React, Typescript, Adapters, AudioContext api)</p>
              </div>
            </div>
          </div>

          <div className="landing-box">
            <div className="landing-box__content">
              <a href="https://sultonbekairways.github.io/image-gallery/build/">Demo</a>
              <img src="/static/petProjects/pet7.jpg" alt="Pet-project" />
              <div className="landing-box__info">
                <p>Image gallery (React, Tailwind css)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
