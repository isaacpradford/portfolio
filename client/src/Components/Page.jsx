import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

import ScrollingBanner from "./LoopingBanner";
function Page({ id, children }) {
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView && !playedAnimation) {
      setPlayedAnimation(true);
    }
  }, [isInView, playedAnimation]);

  return (
    <motion.section ref={ref} className="page" id={id}>
      {/* Parallax title */}
      {/* <motion.h1
        className="page-title"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -325 : 0 }}
        exit={{ y: 300 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        {id}
      </motion.h1> */}

      {/* Page content with slower movement */}
      <motion.div
        className="page-content"
        initial={{ x: 0, scale: !playedAnimation ? 0.1 : 1 }}
        animate={{ scale: isInView && !playedAnimation ? 1 : 0.95 }}
        exit={{ x: 0 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default Page;
