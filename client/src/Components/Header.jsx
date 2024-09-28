import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

const Header = () => {
  let location = useLocation();
  const [isOpen, setOpen] = useState(false);

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
            {/* <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li> */}
            {/* <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                // Make this one a popup window
              >
                About
              </Link>
            </li> */}
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
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
