import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { motion, useInView } from "framer-motion";

import { projects } from "../functions/Projects";

const barVariants = {
  hidden: (side) => ({
    zIndex: 100,
    x: side === "left" ? "0vw" : "0vw",
  }),
  visible: (side) => ({
    x: side === "left" ? "-100vw" : "100vw",
    zIndex: 1,
    transition: {
      duration: 1.1,
      ease: "easeInOut",
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectPage = () => {
  // Set up motion tracking on screen
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.35 });

  // For playing the horizontal bars animation
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const [changeZindex, setChangeZindex] = useState(false);

  // Plays the animation when in view
  useEffect(() => {
    if (isInView && !playedAnimation) {
      setPlayedAnimation(true);
    }
  }, [isInView, playedAnimation]);

  // Sets Project CardList in front of bars after animation has played
  // Without this, you cant hover over the card list since the bars still are rendered over the cards
  // and have a higher z-index
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setChangeZindex(true);
      }, 1300);
    }
  }, [playedAnimation]);

  return (
    <motion.div id="projects" className="b-projects page" ref={ref}>
      {/* Animated bars on view */}
      <motion.div
        className="b-projects__leftBars"
        initial="hidden"
        animate={playedAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left side bars */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="stripe"
            variants={barVariants}
            custom="left"
          />
        ))}
      </motion.div>

      {/* Right-side bars */}
      <motion.div
        className="b-projects__rightBars"
        initial="hidden"
        animate={playedAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="stripe"
            variants={barVariants}
            custom="right"
          />
        ))}
      </motion.div>

      <div className="b-projects__explanation">
        <h1>FOR EXAMPLE...</h1>
      </div>

      <motion.div
        className="b-projects__cardList"
        style={{ zIndex: changeZindex ? 100 : 0 }}
      >
        {projects.map((project) => (
          <Link key={project.id} className="card" to={`/${project.title}`}>
            <div className="card__bg"></div>
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <p className="card__date">{project.date}</p>
            <button className="card__button">See More</button>
          </Link>
        ))}

        <div className="b-projects__bottom">
          <p>Hover over us, don't miss out! </p>
          <p>0.0.0</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
