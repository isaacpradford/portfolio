import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  console.log(location);
  return (
    <nav className="b-navbar">
      <ul className="b-navbar__wrapper">
        {location.pathname != "/" ? (
          <li className="b-navbar__wrapper__link">
            <Link to={`/`}>Home</Link>
          </li>
        ) : (
          <></>
        )}
        {location.pathname != "/projects" ? (
          <li className="b-navbar__wrapper__link">
            <Link to={`/projects`}>All Projects</Link>
          </li>
        ) : (
          <></>
        )}

        {location.pathname != "/about" ? (
          <li className="b-navbar__wrapper__link">
            <Link to={`/about`}>About</Link>
          </li>
        ) : (
          <></>
        )}
        {location.pathname != "/contact" ? (
          <li className="b-navbar__wrapper__link">
            <Link to={`/contact`}>Contact</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};

export default Header;
