import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiMoonBats } from "react-icons/gi";

import { useColor } from "../../functions/ColorContext";

const ProjectPopupHeader = () => {
  const { darkMode, toggleDarkMode, colors } = useColor(); // Use the context

  // Set the CSS properties based on the current mode
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--project-color",
      colors.projectColor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      colors.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--font-color",
      colors.fontColor
    );
  }, [colors]);

  return (
    <header className="b-header">
      <nav className="b-navbar">
        <div className="b-navbar__logo">
          <Link to="/" smooth={true} duration={1250}>
            IR
          </Link>
        </div>

        <ul className="b-navbar__wrapper">
          <li className="b-navbar__wrapper__link">
            <Link to="/" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <div className="b-navbar__nightMode">
            <GiMoonBats onClick={toggleDarkMode} fill="var(--project-color)" />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default ProjectPopupHeader;
