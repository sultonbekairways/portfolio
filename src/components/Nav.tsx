import React from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";

interface navProps {
  pageTrans: Function;
}

function Nav({ pageTrans }: navProps) {
  const [width, setWidth] = React.useState(window.innerWidth);

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // nav-menu toggle
  const menuToggle = () => {
    if (width < 768) {
      navWrapperRef.current?.classList.toggle("transform");

      navOpenRef.current?.classList.toggle("opacity");

      document.querySelector(".wrapper")?.classList.toggle("opacity");
    }
  };

  const handleButtonClick = () => {
    menuToggle();
    pageTrans();
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
          onClick={() => pageTrans()}
          activeClassName="nav-active"
          to="/"
          exact
        >
          .\explore
        </NavLink>
      </div>

      {width < 768 && (
        <div ref={navOpenRef} className="nav-open" onClick={menuToggle}>
          |||
        </div>
      )}

      <div ref={navWrapperRef} className="nav__wrapper">
        {width < 768 && (
          <div className="nav-close" onClick={menuToggle}>
            X
          </div>
        )}
        <ul className="nav-list">
          <li className="nav-list__link space">
            <NavLink
              activeClassName="nav-active"
              onClick={handleButtonClick}
              to="/about"
            >
              .\about
            </NavLink>
          </li>
          <li className="nav-list__link space">
            <NavLink
              activeClassName="nav-active"
              onClick={handleButtonClick}
              to="/work"
            >
              .\work
            </NavLink>
          </li>
          <li className="nav-list__link space">
            <a onClick={menuToggle} href="mailto:kingsulton45@gmail.com">
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
