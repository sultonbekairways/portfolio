/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

import head from "@assets/img/head.jpg";
import github from "@assets/img/github.svg";
import telegram from "@assets/img/telegram.svg";
import mail from "@assets/img/mail.svg";
import download from "@assets/img/download.svg";
import clouds from "@assets/img/clouds.png";
import gojoDance from "@assets/gif/gojoDance.gif";
import kakashi from "@assets/gif/kakashi.gif";

function About() {
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    toggleActions: "restart none reverse none",
  });

  React.useEffect(() => {
    // Kakashi
    gsap.to(".kakashi-dance", {
      motionPath: {
        path: "#about-path",
        align: "#about-path",
        alignOrigin: [0.5, 1],
      },
      duration: 6,
      yoyo: true,
      repeat: Infinity,
    });
    // Gojo
    gsap.to(".gojo-dance", {
      motionPath: {
        path: "#about-path",
        align: "#about-path",
        alignOrigin: [0.5, 1],
      },
      delay: 3,
      duration: 6,
      yoyo: true,
      repeat: Infinity,
    });
  }, []);

  return (
    <>
      <img className="about-head" src={head} alt="my-head" />
      <div className="about">
        <h1>./about</h1>
        <ul className="about-contact">
          <li>
            <a
              href="mailto:kingsulton45@gmail.com"
              className="about-contact__link"
              title="Mail"
            >
              <img className="contact-icon" src={mail} alt="mail" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/s/sultonbekairways"
              target="_blank"
              className="about-contact__link"
              title="Telegram"
            >
              <img className="contact-icon" src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sultonbekairways"
              target="_blank"
              className="about-contact__link"
              title="Github"
            >
              <img className="contact-icon" src={github} alt="github" />
            </a>
          </li>
          <li>
            Download my
            <a
              href="./Sultonbek-Nazarov.doc"
              title="Donwload Resume"
              className="about-contact__link"
            >
              resume <img src={download} alt="download" />
            </a>
          </li>
        </ul>
        <p className="title">
          I am a react frontend developer, former arduino engineer. From
          Uzbekistan, based in Middle Asia.
        </p>
        <p className="subtitle"># 2+ years of experience</p>

        <h2 className="theme">Main skills</h2>
        <ul className="grid">
          <li className="grid-item">Frontend development, Creative thinking</li>
          <li className="grid-item">Javascript, React, Redux, SCSS, HTML</li>
          <li className="grid-item">Figma, Photoshop</li>
        </ul>

        <h2 className="theme">Tools/years</h2>
        <ul className="grid">
          <li className="grid-item">Javascript / 2+</li>
          <li className="grid-item">Typescript.js / 1~</li>
          <li className="grid-item">React / 1~</li>
          <li className="grid-item">Git,Github / 1+</li>
          <li className="grid-item">HTML / 2+</li>
          <li className="grid-item">Scss / 1+</li>
          <li className="grid-item">Figma / 1+</li>
          <li className="grid-item">Photoshop / 2+</li>
          <li className="grid-item">Tdd / 1~</li>
          <li className="grid-item">Webpack / 1~</li>
          <li className="grid-item">Next / 1~</li>
          <li className="grid-item">Node.js / 1~</li>
          <li className="grid-item">GraphQl / 1~</li>
          <li className="grid-item">MySql / 1~</li>
          <li className="grid-item">Linux / 1</li>
          <li className="grid-item">Three.js / 1~</li>
          <li className="grid-item">Jquery / 1+</li>
        </ul>

        <h2 className="theme">Experience</h2>
        <ul className="grid">
          <li className="grid-item">
            <span>Web engineer and Teacher</span> <br />
            @ PROWEB.uz <br />
            2019 - now
          </li>
          <li className="grid-item">
            <span>Freelancer</span> <br />
            Landing page, <br />
            Small web app <br />
            2020 - now
          </li>
          <li className="grid-item">
            <span>Web layout designer</span> <br />
            @ TeamPro.uz <br />
            2021 February
          </li>
        </ul>

        <h2 className="theme">Languages</h2>
        <ul className="grid">
          <li className="grid-item">
            <span>Level: Native</span> <br />
            Uzbek
          </li>
          <li className="grid-item">
            <span>Level: C1</span> <br />
            English, <br />
            Russian
          </li>
          <div className="grid-item">
            <span>Level: basic</span> <br />
            French <br />
          </div>
        </ul>
      </div>

      <div className="dance-wrapper">
        <img
          src={gojoDance}
          alt="gojoDance"
          className="gojo-dance about-dance"
        />
        <img
          src={kakashi}
          alt="kakashi"
          className="kakashi-dance about-dance"
        />
        <img src={clouds} alt="clouds" className="about-cloud" />
        <svg id="about-motionPath" viewBox="-20 0 557 190">
          <path
            id="about-path"
            fill="none"
            d="M100.087,157.001 C136.214,137.154 114.416,141.291 187.47,140.291 262.459,140.291 225.881,119.24 263.867,123.454 321.613,129.86 316.041,172.118 358.866,162.301 444.282,142.718 413.928,155.826 437.565,139.326 "
          />
        </svg>
      </div>
    </>
  );
}

export default About;