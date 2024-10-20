import React, { useState, useEffect, useRef } from "react";
import Popup from "../Components/Popup";
import ProjectPopUp from "./ProjectPopUpPage";

import { motion, useInView } from "framer-motion";

const barVariants = {
  hidden: (side) => ({
    x: side === "left" ? "0vw" : "0vw",
  }),
  visible: (side) => ({
    x: side === "left" ? "-100vw" : "100vw",
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
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Set up motion tracking on screen
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  // Set the names and descriptions of the proejcts
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Subitt",
      description: "Subscribe how you want to! ",
      date: "3/24 - Present",
    },
    {
      id: 2,
      title: "Raft",
      description: "I had *every* user on the app following me",
      date: "3/24",
    },
    {
      id: 3,
      title: "PLMS",
      description: "Personal Learning Modules, or Plums for short",
      date: "2/24",
    },
    {
      id: 4,
      title: "TwitterBots",
      description: "Twitter bots from before Twitter wasn't Twitter",
      date: "10/23",
    },
    {
      id: 5,
      title: "Portfolio",
      description: "The website you're looking at right now",
      date: "Present",
    },
  ]);

  const handlePopupOpen = (projectTitle) => {
    setSelectedProject(projectTitle);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    setSelectedProject(null);
  };

  // Sets Project CardList in front of bars after animation has played
  // Without this, you cant hover over the card list since the bars still are rendered over the cards
  // and have a higher z-index
  useEffect(() => {
    if (isInView && !playedAnimation) {
      const timer = setTimeout(() => {
        setPlayedAnimation(true);
      }, 1300);
    }
  }, [isInView, playedAnimation]);

  return (
    <motion.div id="projects" className="b-projects page" ref={ref}>
      {/* Animated bars on view */}
      <motion.div
        className="b-projects__leftBars"
        initial="hidden"
        animate="visible"
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
        animate="visible"
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
        style={{ zIndex: playedAnimation ? 100 : 1 }}
      >
        {/* <h1 className="b-projects__cardList__title">Projects:</h1> */}
        {projects.map((project) => (
          <li
            key={project.id}
            className="card"
            onClick={() => handlePopupOpen(project.title)}
          >
            <div className="card__bg"></div>
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <p className="card__date">{project.date}</p>
            <button className="card__button">See More</button>
          </li>
        ))}

        <div className="b-projects__bottom">
          <p>Hover over us, don't miss out! </p>
          <p>0.0.0</p>
        </div>
      </motion.div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        component={(props) => (
          <ProjectPopUp
            {...props}
            projectTitle={selectedProject}
            allProjects={projects}
          />
        )}
      />
    </motion.div>
  );
};

export default ProjectPage;

{
  /* <ul className="--1">
<li
  className="card"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Subitt</h3>
  <p className="card__description">Subscribe how you want to!</p>
  <p className="card__date">3/24 - Present</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
<li
  className="card project2"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <h3 className="card__title">RAFT</h3>
  <p className="card__description">
    I had *every* user on the app following me
  </p>
  <p className="card__date">5/2024</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
  <div className="card__bg"></div>
</li>
</ul>
<ul className="--2">
<li
  className="card project3"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">PLMS</h3>
  <p className="card__description">
    Personal Learning Modules, or Plums for short
  </p>
  <p className="card__date">2/2024</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
<li className="card empty"></li>
<li
  className="card project4"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Portfolio</h3>
  <p className="card__description">
    The website you're looking at right now
  </p>
  <p className="card__date">Always a work in progress...</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
</ul>
<ul className="--3">
<li className="card empty"></li>
<li
  className="card project5"
  onClick={() => {
    isPopupOpen ? handlePopupClose() : handlePopupOpen();
  }}
>
  <div className="card__bg"></div>
  <h3 className="card__title">Twitter Bots</h3>
  <p className="card__description">
    Twitter bots from before Twitter wasn't Twitter
  </p>
  <p className="card__date">10/23</p>
  <button
    className="card__button"
    onClick={() => {
      isPopupOpen ? handlePopupClose() : handlePopupOpen();
    }}
  >
    See More:
  </button>
</li>
</ul> */
}
