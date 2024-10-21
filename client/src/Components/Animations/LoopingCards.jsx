import React from "react";
import { motion } from "framer-motion";

import { ImQuotesLeft } from "react-icons/im";

import fairfax from "../../assets/IMG_3990.png";
import cacti from "../../assets/cacti.png";
import chicago from "../../assets/chicago.png";

const marqueeVariants = {
  animate: {
    x: [0, 0, 0],
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
  const testimonials = [
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
      name: "Annmarie Sansevero",
      content: "",
      position: "Project Lead, CSE445",
    },
    {
      name: "Aoi Kuriki",
      content: "",
      position: "Subitt.io CTO",
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
          {testimonial.image && <img src={testimonial.image} />}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoopingCards;
