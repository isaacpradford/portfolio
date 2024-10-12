import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Socials from "../Components/Socials";
import ScrollingBanner from "../Components/LoopingBanner";
import SpinningLoader from "./SpinningLoader";

const HomePage = () => {
  return (
    <div id="home" className="b-home">
      {/* <div className="b-home__background"></div> */}

      <div className="b-home__title">
        <div className="b-home__title__first">
          <ScrollingBanner title={"Full Stack WebDev"} baseVelocity={5} />
        </div>
      </div>

      {/* <SpinningLoader /> */}
      {/* <h1>https://www.framer.com/motion/</h1>
      <h1>https://r3f.docs.pmnd.rs/getting-started/introduction</h1>
      <h1>https://threejs.org/</h1> */}
      {/* <div className="b-home__banner">
        <p>
          FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK
          WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV |
          UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX |
          FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK
          WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV |
          UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX |
          FULL STACK WEBDEV | UI / UX |
        </p>
      </div> */}

      <div className="b-home__socials">
        <Socials />
      </div>
      {/* <div className="b-home__halftone"></div> */}
    </div>
  );
};

export default HomePage;
