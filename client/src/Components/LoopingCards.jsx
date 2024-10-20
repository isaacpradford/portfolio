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

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import fairfax from "../assets/IMG_3990.png";
import cacti from "../assets/cacti.png";
import chicago from "../assets/chicago.png";

const marqueeVariants = {
  animate: {
    x: [250, -250, 250],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 120,
        ease: "linear",
      },
    },
  },
};

const LoopingCards = () => {
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

  const testimonials = [
    {
      image: fairfax,
    },
    {
      image: chicago,
    },
    {
      //   name: "Jae Hyun Kim",
      content:
        "Isaac excelled in collaborating with a large team of developers to create products and solutions for real-world problems, including those requiring immediate attention. I strongly recommend Isaac to any team looking for a candidate with the perfect blend of technical and soft skills.",
      //   position: "Development Supervisor, Subitt.io",
    },
    {
      name: "Jae Hyun Kim",
      content:
        "Isaac is a highly capable and competent problem-solver, particularly with React.js and Node.js. He not only thinks creatively and efficiently when tackling technical challenges but also communicates effectively with non-technical stakeholders.",
      position: "Development Supervisor, Subitt.io",
    },
    {
      name: "Michael Brown",
      content: "",
      position: "Pee inc.",
    },
    {
      image: cacti,
    },
  ];

  return (
    <motion.div
      className="b-testimonials__cards-wrapper"
      variants={marqueeVariants}
      animate="animate"
    >
      {testimonials.map((testimonial, index) => (
        <motion.div className="b-testimonials__card" key={index}>
          <ImQuotesLeft color="var(--project-color)" size={20} />
          {testimonial.content && <p>{testimonial.content}</p>}
          {testimonial.name && <h1>{testimonial.name}</h1>}
          {testimonial.position && <h4>{testimonial.position}</h4>}
          {testimonial.image && (
            <img src={testimonial.image} alt="An image of me" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoopingCards;
