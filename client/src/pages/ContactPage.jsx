import React, { useRef } from "react";
import ContactForm from "../Components/Sections/ContactForm";

import { motion, useTransform, useScroll } from "framer-motion";
import { useColor } from "../functions/ColorContext";

const ContactPage = () => {
  const ref = useRef(null);

  // Get dark mode to get rid of picture background with it on
  const { darkMode } = useColor();

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
    ["-100%", "120%"]
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
    <motion.div id="contact" className="b-contact page" ref={ref}>
      {!darkMode && (
        <motion.div
          className="b-contact__backdrop"
          style={{
            y: backgroundPositionY,
            opacity: opacity,
          }}
        />
      )}

      <div className="b-contact__content">
        <motion.div
          className="b-contact__title"
          style={{
            x: titleX,
            opacity: opacity,
          }}
        >
          <p style={darkMode ? { color: "black" } : { color: "white" }}>
            Working on a project?
          </p>
          <h1 style={darkMode ? { color: "black" } : { color: "white" }}>
            LET'S
          </h1>
          <h1 style={darkMode ? { color: "black" } : { color: "white" }}>
            CONN
          </h1>
          <h1
            className="b-contact__title--3"
            style={darkMode ? { color: "black" } : { color: "white" }}
          >
            ECT!
          </h1>
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
