import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import Popup from "./Popup";
import AboutPage from "../pages/AboutPage";

const Header = () => {
  let location = useLocation();
  const [isOpen, setOpen] = useState(false);

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
    <div className="b-header">
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

        {(isOpen || windowDimensions.width > 768) && (
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
                to="testimonials"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Reviews
              </Link>
            </li>
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Skills
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
          </ul>
        )}
      </nav>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        component={AboutPage}
      />
    </div>
  );
};

export default Header;
