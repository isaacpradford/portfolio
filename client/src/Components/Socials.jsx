import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socials">
      <div className="words">
        <h1>Isaac Radford - @2024</h1>
        <h1>Chicago, Illinois</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"https://github.com/isaacpradford"} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.linkedin.com/in/isaacpradford/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
        <ul>
          {/* <li>
            <Link
              to={"https://www.instagram.com/radford_isaac/"}
              target="_blank"
            >
              Instagram
            </Link>
          </li> */}
          <li>
            <Link
              to={"https://bsky.app/profile/wheat.bsky.social"}
              target="_blank"
            >
              BlueSky
            </Link>
          </li>
          <li>
            <Link to={"https://soundcloud.com/isaacradford"} target="_blank">
              SoundCloud
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
