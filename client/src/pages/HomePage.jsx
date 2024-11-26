import React, { useRef } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { GiCobweb, GiMoonBats } from "react-icons/gi";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

import Socials from "../Components/Sections/Socials";

const HomePage = () => {
  // Set up ref for animation
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Translate animations for the two boxes
  const leftBoxTranslateX = useTransform(
    scrollYProgress,
    [0, 0.8],
    [2000, -1000]
  );
  const rightBoxTranslateX = useTransform(
    scrollYProgress,
    [0, 0.8],
    [-2000, 1000]
  );

  return (
    <motion.div id="home" className="b-home page" ref={ref}>
      {/* <motion.div
        className="b-home__square1"
        style={{ translateX: leftBoxTranslateX }}
      ></motion.div>
      <motion.div
        className="b-home__square2"
        style={{ translateX: rightBoxTranslateX }}
      ></motion.div> */}

      <motion.div className="b-home__title">
        <Link to="home">
          <p>Software Engineering /</p>
          <p>Full Stack WebDev</p>
        </Link>
        <h3 className="b-home__name">Isaac Radford</h3>
      </motion.div>

      <motion.div className="b-home__socials">
        <Socials />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
