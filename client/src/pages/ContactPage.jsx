import React, { useRef } from "react";
import ContactForm from "../Components/ContactForm";
import { Link } from "react-router-dom";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const ContactPage = () => {
  const ref = useRef(null);

  // Detect scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animations for title (from left) and form (from right)
  const titleX = useTransform(scrollYProgress, [0.3, 0.5], [-200, 0]);
  const formX = useTransform(scrollYProgress, [0.3, 0.5], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "100%"]
  );
  const backgroundBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["5px", "1000px"]
  );
  const backgroundBrightness = useTransform(
    scrollYProgress,
    [0, 1],
    ["90%", "100%"]
  );

  return (
    <motion.div id="contact" className="b-contact" ref={ref}>
      <motion.div
        className="b-contact__backdrop"
        style={{
          backgroundPositionY,
        }}
      ></motion.div>
      <div className="b-contact__content">
        <motion.div
          className="b-contact__title"
          style={{
            x: titleX,
            opacity: opacity,
          }}
        >
          <p>Working on a project?</p>
          <h1>LET'S</h1>
          <h1>CONN</h1>
          <h1 className="b-contact__title--3">ECT!</h1>
        </motion.div>

        <motion.div
          className="b-contact__form"
          style={{
            x: formX,
            opacity: opacity,
          }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

{
  /* <div className="b-contact__socials">
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
      </div> */
}
