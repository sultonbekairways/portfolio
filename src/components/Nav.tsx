import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";

function Nav() {
  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".logo", { x: -400, duration: 1 });
    tl.from(".nav-list", { x: 400 }, "-=0.5");
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">.\explore</Link>
      </div>
      <ul className="nav-list">
        <li className="nav-list__link space">
          <Link to="/about">.\about</Link>
        </li>
        <li className="nav-list__link space">
          <Link to="/work">.\work</Link>
        </li>
        <li className="nav-list__link space">
          <a href="mailto:kingsulton45@gmail.com">.\contact</a>
        </li>
        <li className="nav-list__link">
          <a href="https://t.me/s/sultonbekairways">
            <img className="contact-icon" src={telegram} alt="telegram" />
          </a>
        </li>
        <li className="nav-list__link">
          <a href="https://github.com/sultonbekairways">
            <img className="contact-icon" src={github} alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
