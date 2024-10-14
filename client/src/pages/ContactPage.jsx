import React, { useRef } from "react";
import ContactForm from "../Components/ContactForm";
import Socials from "../Components/Socials";

import { motion, useScroll, useSpring } from "framer-motion";

const ContactPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="contact" className="b-contact" ref={ref}>
      <figure className="progress">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </figure>

      <div className="b-contact__content">
        <div className="b-contact__title">
          <p>Working on a project?</p>
          <h1>LET'S</h1>
          <h1>CONN</h1>
          <h1 className="b-contact__title--3">ECT!</h1>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
