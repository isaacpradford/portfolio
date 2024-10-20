import React, { useRef } from "react";

import {
  motion,
  useTransform,
  useMotionValue,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Background = () => {
  const { scrollYProgress } = useScroll();

  const background = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <motion.div className="b-background" style={{}}>
      {/* <motion.div
        className="b-background__square"
        style={{
          width: "100vw",
          height: "10vh",
          backgroundColor: "#333",
          mixBlendMode: "exclusion",

          position: "fixed",
          top: background,
        }}
      ></motion.div> */}
    </motion.div>
  );
};

export default Background;
