import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ children, offset = 0.2, id }) => {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: "some" });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${offset * 100}%`, `-${offset * 100}%`]
  );

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);

  return (
    <motion.div
      style={{ y: translateY }}
      initial={{ scale: 0.8 }}
      animate={{
        scale: isInView ? 1 : 0.8,
      }}
      exit={{ scale: 0.8 }}
      transition={{
        scale: { duration: 0.8, ease: "easeInOut" },
      }}
      viewport={{
        once: true,
      }}
      id={id}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
