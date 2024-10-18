import React, { useEffect, useState, useRef } from "react";
import { FaRegMoon } from "react-icons/fa6";
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
import ScrollingBanner from "../Components/LoopingBanner";

const HomePage = () => {
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  const scale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const translate = useTransform(scrollY, [0, 300], [0, -260]);
  const smoothScale = useSpring(scale, { stiffness: 1000, damping: 200 });

  const imageScale = useTransform(scrollY, [0, 100], [1, 0.5]);
  const imageTranslate = useTransform(scrollY, [0, 300], [0, 500]);

  return (
    <motion.div id="home" className="b-home page" ref={ref}>
      {/* Don't get scared! */}
      {/* {invert ? <GiCobweb className="cobweb" /> : <></>} */}

      <motion.div
        className="b-home__title"
        // style={{ scale: smoothScale, translateY: translate }}
        // initial={{ y: 0 }}
        // animate={{ y: isInView ? 0 : -260 }}
        // exit={{ y: 0 }}
        // transition={{
        //   duration: 5,
        //   type: "spring",
        //   stiffness: 100,
        //   damping: 20,
        // }}
      >
        <Link to="home">
          {/* <ScrollingBanner title={"Isaac Radford"} baseVelocity={2} /> */}
          <h1>Isaac Radford</h1>
        </Link>
        <h3>Software Engineering + Full Stack Web Development</h3>
      </motion.div>

      {/* <motion.div
        className="b-home__image"
        style={{ scale: imageScale, translateY: imageTranslate }}
      >
        <img src={Street} alt="Image of Fairfax Avenue in California" />
      </motion.div> */}
      <motion.div className="b-home__socials">
        <Socials />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
