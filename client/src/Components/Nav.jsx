import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    <nav className="b-navbar">
      {/* Hamburger button */}
      <div className="b-navbar__hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
      </div>

      {(isOpen || windowDimensions.width > 768) && (
        <ul className="b-navbar__wrapper">
          {location.pathname !== "/" && (
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link to={`/`} onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
          )}
          {location.pathname !== "/projects" && (
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link to={`/projects`} onClick={() => setOpen(false)}>
                All Projects
              </Link>
            </li>
          )}
          {location.pathname !== "/about" && (
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link to={`/about`} onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
          )}
          {location.pathname !== "/contact" && (
            <li className={`b-navbar__wrapper__link ${isOpen ? "open" : ""}`}>
              <Link to={`/contact`} onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Header;
