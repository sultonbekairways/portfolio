import React from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";

function Nav() {
  const [width, setWidth] = React.useState(window.innerWidth);

  // nav-menu toggle
  const handleButtonClick = () => {
    if (width < 768) {
      navWrapperRef.current?.classList.toggle("transform");

      navOpenRef.current?.classList.toggle("opacity");

      document.querySelector(".wrapper")?.classList.toggle("opacity");
    }
  };

  const navWrapperRef = React.useRef<HTMLDivElement>(null);
  const navOpenRef = React.useRef<HTMLDivElement>(null);

  // window resize handler
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  // gsap nav-components movement
  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".logo", { x: -500, duration: 1 });
    tl.from(".nav-list", { x: 500 }, "-=0.5");
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <NavLink
          activeClassName="nav-active"
          to="/"
          exact
        >
          .\explore
        </NavLink>
      </div>

      {width < 768 && (
        <div ref={navOpenRef} className="nav-open" onClick={handleButtonClick}>
          |||
        </div>
      )}

      <div ref={navWrapperRef} className="nav__wrapper">
        {width < 768 && (
          <div className="nav-close" onClick={handleButtonClick}>
            X
          </div>
        )}
        <ul className="nav-list">
          <li className="nav-list__link space">
            <NavLink activeClassName="nav-active" onClick={handleButtonClick} to="/about">
              .\about
            </NavLink>
          </li>
          <li className="nav-list__link space">
            <NavLink activeClassName="nav-active" onClick={handleButtonClick} to="/work">
              .\work
            </NavLink>
          </li>
          <li className="nav-list__link space">
            <a onClick={handleButtonClick} href="mailto:kingsulton45@gmail.com">
              .\contact
            </a>
          </li>
          <li className="nav-list__link icon">
            <a href="https://t.me/s/sultonbekairways">
              <img className="contact-icon" src={telegram} alt="telegram" />
            </a>
          </li>
          <li className="nav-list__link icon">
            <a href="https://github.com/sultonbekairways">
              <img className="contact-icon" src={github} alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
