import React, { useState, useEffect, useRef } from "react";
import Popup from "../Components/Popup";
import ProjectPopUp from "./ProjectPopUpPage";
import { Link } from "react-scroll";

import {
  motion,
  useScroll,
  useInView,
  useTransform,
  useSpring,
} from "framer-motion";

const ProjectPage = () => {
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  console.log(playedAnimation);

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
      title: "TwitterBots",
      description: "Twitter bots from before Twitter wasn't Twitter",
      date: "10/23",
    },
    {
      id: 4,
      title: "PLMS",
      description: "Personal Learning Modules, or Plums for short",
      date: "2/24",
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

  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.9 });

  useEffect(() => {
    if (isInView && !playedAnimation) {
      setPlayedAnimation(true);
    }
  }, [isInView, playedAnimation]);

  const scale = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div id="projects" className="b-projects page" ref={ref}>
      <div className="b-projects__explanation">
        <h1>FOR EXAMPLE...</h1>
      </div>
      <motion.div className="b-projects__cardList">
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

      {/* <motion.div
        className="b-projects__svg"
        initial={{ scale: 0.3 }}
        animate={{ scale: isInView ? 1 : 0.3 }}
        exit={{ scale: 0.3 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        <svg
          className="svgsquare"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="squarepath"
            d="M100 0 H900 A100 100 0 0 1 1000 100 V550 A100 100 0 0 1 900 650 H100 A100 100 0 0 1 0 550 V100 A100 100 0 0 1 100 0 Z"
            fill="none"
            stroke="transparent"
          />

          <text textAnchor="start">
            <textPath className="my-text" href="#squarepath" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="-400%"
                to="100%"
                begin="0s"
                dur="600s"
                repeatCount="indefinite"
              ></animate>
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
            </textPath>
          </text>
        </svg>
      </motion.div> */}

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
