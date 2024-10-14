import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ children, offset = 0.2 }) => {
  const { scrollYProgress } = useScroll();

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${offset * 100}%`, `-${offset * 100}%`]
  );

  return <motion.div style={{ y: translateY }}>{children}</motion.div>;
};

export default ParallaxSection;
