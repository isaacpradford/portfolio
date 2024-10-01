import React from "react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="socials">
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
        <li>
          <Link to={"https://www.instagram.com/radford_isaac/"} target="_blank">
            Instagram
          </Link>
        </li>
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
  );
};

export default Socials;
