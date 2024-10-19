import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils"; 

// Thanks to Matt from Framer Motion for making this code open source
// https://codesandbox.io/p/sandbox/r1dy4u?file=%2Fsrc%2FApp.tsx%3A20%2C3-54%2C37
const ScrollingBanner = ({ title, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -60, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="banner-wrapper">
      <motion.div className="scroller" style={{ x }}>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
        <span>{title}</span>
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
