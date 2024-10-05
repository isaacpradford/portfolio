import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Socials from "../Components/Socials";

const HomePage = () => {
  return (
    <div id="home" className="b-home">
      <div className="b-home__background"></div>
      <div className="b-home__banner">
        <p>
          FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK
          WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV |
          UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX |
          FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK
          WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV |
          UI / UX | FULL STACK WEBDEV | UI / UX | FULL STACK WEBDEV | UI / UX |
          FULL STACK WEBDEV | UI / UX |
        </p>
      </div>

      <div className="b-home__socials">
        <Socials />
      </div>
      {/* <div className="b-home__halftone"></div> */}
    </div>
  );
};

export default HomePage;