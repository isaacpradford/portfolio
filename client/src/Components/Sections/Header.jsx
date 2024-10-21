import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import Popup from "../Animations/Popup";
import AboutPage from "../../pages/AboutPage";

import { FaRegMoon } from "react-icons/fa6";
import { GiCobweb, GiMoonBats } from "react-icons/gi";

import { useColor } from "../../functions/ColorContext";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  // Dark mode context setup
  const { colors, darkMode, toggleDarkMode } = useColor();
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      colors.backgroundColor
    );
  }, [colors]);

  const handleNightModeClick = () => {
    toggleDarkMode(); // Toggle dark mode
  };

  // Set up about popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  // Checks for window size
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="b-header">
      <nav className="b-navbar">
        {/* Hamburger button */}
        <div className="b-navbar__hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
        </div>

        <div className="b-navbar__logo">
          <Link to="home" smooth={true} duration={1250}>
            IR
          </Link>
        </div>

        {darkMode ? <GiCobweb className="cobweb" /> : <></>}

        {(isOpen || windowDimensions.width > 800) && (
          <ul className="b-navbar__wrapper">
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                onClick={() => {
                  isPopupOpen ? handlePopupClose() : handlePopupOpen();
                }}
                to=""
              >
                About
              </Link>
            </li>
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <div className="b-navbar__nightMode">
              <GiMoonBats
                onClick={handleNightModeClick}
                fill="var(--project-color)"
              />
            </div>
          </ul>
        )}
      </nav>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        component={AboutPage}
      />
    </header>
  );
};

export default Header;
