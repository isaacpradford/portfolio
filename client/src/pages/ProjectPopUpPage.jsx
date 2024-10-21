import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProjectInfo } from "../functions/Projects";
import { motion, AnimatePresence } from "framer-motion";
import ScrollingBanner from "../Components/Animations/LoopingBanner";
import { projects } from "../functions/Projects";
import ProjectPopupHeader from "../Components/Sections/ProjectPopupHeader";
import { useColor } from "../functions/ColorContext";
import logo from "../assets/logo_black.png";

// List of variants (animations) for each of the items that come onto the screen
// Loading animation of the bars coming down and going up
const transitionVariant = {
  hidden: { y: "-100%" },
  visible: {
    y: "-25%", // Move down
    transition: {
      duration: 1,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "200%",
    transition: {
      duration: 1,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

// Sets the background color to come in after the bars have loaded
const backgroundAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 1 },
  },
  exit: { opacity: 0, transition: { duration: 2 } },
};

const titleVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 70 },
  },
};

const descriptionVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      type: "spring",
      stiffness: 60,
      staggerChildren: 1,
    },
  },
};

const imageVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 60,
    },
  },
};

const listVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.9,
      type: "spring",
      stiffness: 60,
      staggerChildren: 0.45,
    },
  },
};

const itemVariant = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60 },
  },
};

// This is the page that pops up when a project name is clicked
const ProjectPopUp = () => {
  const { projectTitle } = useParams(); // Get project title from URL
  const [projectDetails, setProjectDetails] = useState(null);

  // Project color context
  const { setProjectColor } = useColor();

  const [selectedImage, setSelectedImage] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Get index of current project and load it
  const [currentIndex, setCurrentIndex] = useState(
    projects.findIndex((project) => project.title === projectTitle)
  );

  // Get data, set animation states while/after loading + when next project is clicked
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await getProjectInfo(projects[currentIndex].title);

        setTimeout(() => {
          setContentLoaded(true);
        }, 2500);

        setProjectDetails(response);
        setProjectColor(response.color);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [currentIndex, projectTitle]);

  document.documentElement.style.setProperty(
    "--project-color",
    projectDetails?.color
  );

  // Handle "Next Project" logic
  const navigate = useNavigate();
  const goToNextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length; // Loop back to the first project if needed
    setCurrentIndex(nextIndex);
    setContentLoaded(false); // Resets animations
    navigate(`/${projects[nextIndex].title}`);
  };

  // // Sets up window dimension updating for "responsiveness"
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowDimensions.width < 800 ? (
        <div className="responsiveness">
          <h1 className="responsiveness__warning">
            This website looks better on larger devices!
          </h1>
          <img src={logo} className="responsiveness__logo" />
        </div>
      ) : (
        <div className="b-projects">
          <ProjectPopupHeader />
          <motion.section className="project-popup">
            {/* Background that comes in while transition is playing */}
            <motion.div
              className="project-popup__background"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backgroundAnimation}
            ></motion.div>

            {/* Transition animation */}
            <motion.div
              className="bars top-bars"
              variants={transitionVariant}
              initial="hidden"
              animate={contentLoaded ? "exit" : "visible"}
              exit="exit"
            >
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
              <motion.div className="bar" variants={transitionVariant} />
            </motion.div>

            {contentLoaded && (
              <>
                <div className="project-popup__header">
                  <motion.h2
                    variants={titleVariant}
                    className="project-popup__header__title"
                  >
                    <ScrollingBanner
                      title={projectDetails?.title}
                      baseVelocity={2}
                    />
                  </motion.h2>

                  <motion.div
                    className="project-popup__header__nextButton"
                    variants={descriptionVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    <h1>Next Project:</h1>
                    <p onClick={goToNextProject}>
                      {projects[(currentIndex + 1) % projects.length].title}
                    </p>
                  </motion.div>
                </div>

                {/* Bottom - Text Content */}
                <div className="project-popup__content">
                  {/* Subtitle */}
                  <motion.p
                    className="project-popup__content__subtitle"
                    variants={titleVariant}
                  >
                    {projectDetails?.subtitle}
                  </motion.p>

                  {/* Images */}
                  <motion.div
                    className="project-popup__content__images"
                    variants={imageVariant}
                  >
                    {projectDetails?.header_picture && (
                      <motion.img
                        src={`data:image/png;base64,${projectDetails?.header_picture}`}
                        alt={`${projectDetails?.title} header`}
                        className="project-popup__images"
                        layoutId="headerImage"
                        onClick={() => setSelectedImage("headerImage")}
                        whileHover={{ rotate: 5, translateY: -50, zIndex: 5 }}
                        whileTap={{ scale: 0.9, borderRadius: "10px" }}
                      />
                    )}

                    {projectDetails?.demo_picture && (
                      <motion.img
                        src={`data:image/png;base64,${projectDetails?.demo_picture}`}
                        alt={`${projectDetails?.title} demo picture`}
                        className="project-popup__images"
                        layoutId="demoImage"
                        onClick={() => setSelectedImage("demoImage")}
                        whileHover={{ rotate: 5, translateY: -50, zIndex: 5 }}
                        whileTap={{ scale: 0.9, borderRadius: "10px" }}
                      />
                    )}
                  </motion.div>

                  {/* Descriptions staggered */}
                  <motion.div
                    variants={descriptionVariant}
                    initial="hidden"
                    animate="visible"
                    className="project-popup__content__description"
                  >
                    <motion.p variants={itemVariant}>
                      {projectDetails?.description1}
                    </motion.p>
                    <motion.p variants={itemVariant}>
                      {projectDetails?.description2}
                    </motion.p>
                    <motion.p className="lastDesc" variants={itemVariant}>
                      {projectDetails?.description3}
                    </motion.p>
                  </motion.div>

                  {/* Tech stack */}
                  <div className="project-popup__content__stack">
                    {projectDetails?.frontend_stack && (
                      <motion.div
                        variants={listVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* <h3>Frontend</h3> */}
                        <motion.ul>
                          {projectDetails?.frontend_stack.map((tech, index) => (
                            <motion.li key={index} variants={itemVariant}>
                              {tech}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}

                    {projectDetails?.backend_stack && (
                      <motion.div
                        variants={listVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* <h3>Backend</h3> */}
                        <motion.ul>
                          {projectDetails?.backend_stack.map((tech, index) => (
                            <motion.li key={index} variants={itemVariant}>
                              {tech}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}

                    {projectDetails?.tech_stack && (
                      <motion.div
                        variants={listVariant}
                        initial="hidden"
                        animate="visible"
                      >
                        {/* <h3>Tech Stack:</h3> */}
                        <motion.ul>
                          {projectDetails?.tech_stack.map((tech, index) => (
                            <motion.li key={index} variants={itemVariant}>
                              {tech}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Links */}
                  <motion.div
                    className="project-popup__content__links"
                    variants={descriptionVariant}
                  >
                    {projectDetails?.demo_link && (
                      <a
                        href={`https://${projectDetails.demo_link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {projectDetails?.project_url &&
                      projectDetails?.demo_link && <p> / </p>}
                    {projectDetails?.project_url && (
                      <a
                        href={projectDetails?.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </motion.div>
                  {/* Pop open image when clicked */}
                  <AnimatePresence>
                    {selectedImage && (
                      <motion.div
                        className="popup-overlay focus-image project-popup__header__images"
                        layoutId={selectedImage}
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.img
                          src={`data:image/png;base64,${
                            selectedImage === "headerImage"
                              ? projectDetails?.header_picture
                              : projectDetails?.demo_picture
                          }`}
                          alt="Focused Image"
                          className="focused-image"
                        />
                        <h1>Click again to close</h1>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </motion.section>
        </div>
      )}
    </>
  );
};

export default ProjectPopUp;
