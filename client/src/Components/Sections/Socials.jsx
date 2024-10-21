import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

const Socials = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1.2, 1]);
  const translate = useTransform(scrollY, [0, 300], [50, 0]);
  const smoothScale = useSpring(scale, { stiffness: 1000, damping: 200 });

  return (
    <motion.div
      className="socials"
      style={{ scale: smoothScale, translateX: translate, zIndex: 0 }}
    >
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
    </motion.div>
  );
};

export default Socials;
