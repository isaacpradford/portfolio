import React, { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { GiCobweb, GiMoonBats } from "react-icons/gi";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import Socials from "../Components/Socials";
import Street from "../assets/IMG_3990.jpg";

{
  /* <h1>https://www.framer.com/motion/</h1>
<h1>https://r3f.docs.pmnd.rs/getting-started/introduction</h1>
<h1>https://threejs.org/</h1> */
}

const HomePage = () => {
  const [invert, setInvert] = useState(false);
  const invertColors = document.documentElement.style.setProperty(
    "--invert",
    invert ? 0.9 : 0
  );
  const handleNightModeClick = () => setInvert(!invert);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const translate = useTransform(scrollY, [0, 300], [0, -225]);
  const smoothScale = useSpring(scale, { stiffness: 1000, damping: 200 });

  return (
    <motion.div id="home" className="b-home">
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
      >
        <h1>Isaac Radford</h1>
        <h3>Software Engineering + Full Stack Web Development</h3>
      </motion.div>

      <div className="b-home__image">
        {/* <img src={Street} alt="Image of Fairfax Avenue in California" /> */}
      </div>
      <div className="b-home__socials">
        <Socials />
      </div>
    </motion.div>
  );
};

export default HomePage;
