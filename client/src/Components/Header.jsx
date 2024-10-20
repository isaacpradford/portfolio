import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import { FaRegMoon } from "react-icons/fa6";
import { GiCobweb, GiMoonBats } from "react-icons/gi";
import Popup from "./Popup";
import AboutPage from "../pages/AboutPage";

const Header = () => {
  let location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [invert, setInvert] = useState(false);

  // Night mode setup
  const invertColors = document.documentElement.style.setProperty(
    "--invert",
    invert ? 0.9 : 0
  );
  const handleNightModeClick = () => setInvert(!invert);

  // Set up about popup
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

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
          <Link to="home" smooth={true} duration={250}>
            ISAAC
          </Link>
        </div>

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
                duration={500}
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
            <div className="b-navbar__nightMode">
              <FaRegMoon
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
