import React, { useEffect, useState, useRef } from "react";
import { LuSunMoon } from "react-icons/lu";
import { GiCobweb, GiMoonBats } from "react-icons/gi";
import { Link } from "react-scroll";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

import Socials from "../Components/Socials";
import Street from "../assets/IMG_3990.jpg";

const HomePage = () => {
  const ref = useRef(null);
  const [invert, setInvert] = useState(false);
  const invertColors = document.documentElement.style.setProperty(
    "--invert",
    invert ? 0.9 : 0
  );
  const handleNightModeClick = () => setInvert(!invert);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  const scale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const translate = useTransform(scrollY, [0, 300], [0, -200]);
  const smoothScale = useSpring(scale, { stiffness: 1000, damping: 200 });

  return (
    <motion.div id="home" className="b-home page" ref={ref}>
      <div className="b-home__nightMode">
        <GiMoonBats
          fill="var(--project-color)"
          onClick={handleNightModeClick}
        />
      </div>

      {/* Don't get scared! */}
      {invert ? <GiCobweb className="cobweb" /> : <></>}

      <motion.div
        className="b-home__title"
        style={{ scale: smoothScale, translateY: translate }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : -360 }}
        exit={{ y: 0 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Link to="home">
          <h1>Isaac Radford</h1>
        </Link>
        <h3>Software Engineering + Full Stack Web Development</h3>
      </motion.div>

      <div className="b-home__image">
        {/* <img src={Street} alt="Image of Fairfax Avenue in California" /> */}
      </div>
      <motion.div className="b-home__socials">
        <Socials />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
