import React, { useRef } from "react";
import LoopingCards from "../Components/Animations/LoopingCards";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TestimonialsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Rotation numbers for each axis when the page is on screen
  const rotateY = useTransform(scrollYProgress, [0.3, 0.4], [5, 0]);
  const rotateX = useTransform(scrollYProgress, [0.3, 0.4], [-50, 0]);
  const rotateZ = useTransform(scrollYProgress, [0.3, 0.4], [30, 0]);

  // Add spring motion smoothing
  const stiffness = 80;
  const damping = 20;
  const springRotateY = useSpring(rotateY, {
    stiffness: stiffness,
    damping: damping,
  });
  const springRotateX = useSpring(rotateX, {
    stiffness: stiffness,
    damping: damping,
  });
  const springRotateZ = useSpring(rotateZ, {
    stiffness: stiffness,
    damping: damping,
  });

  return (
    <motion.div id="testimonials" className="b-testimonials page" ref={ref}>
      <div className="b-testimonials__header">
        <h1>But don't just take it from me...</h1>
      </div>

      <motion.div
        style={{
          rotateY: springRotateY,
          rotateX: springRotateX,
          rotateZ: springRotateZ,
          perspective: 1000,
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
      >
        <LoopingCards />
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsPage;
