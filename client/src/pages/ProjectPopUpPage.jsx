import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { getProjectInfo } from "../functions/Projects";
import { motion, AnimatePresence } from "framer-motion";
import ScrollingBanner from "../Components/LoopingBanner";

const backgroundAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
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
      delay: 1,
      type: "spring",
      stiffness: 60,
      staggerChildren: 0.45,
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

// Maybe add a next page button too?

// This is the page that pops up when a project name is clicked
const ProjectPopUp = ({ onClose, projectTitle, setContentLoaded }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Get data, set animation states while/after loading
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await getProjectInfo(projectTitle);
        setProjectDetails(response);

        // Content is loaded, notify parent component (Popup) to trigger the exit animation
        setTimeout(() => {
          setContentLoaded(true);
        }, 2000);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectTitle, setContentLoaded]);

  // Set the color of the box to be the color received from db
  document.documentElement.style.setProperty(
    "--project-color",
    projectDetails?.color
  );

  return (
    <motion.section
      className="popup-overlay project-popup"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backgroundAnimation}
    >
      <div className="project-popup__banner">
        <ScrollingBanner title={projectTitle} baseVelocity={2} />
      </div>

      <div className="project-popup__header">
        {/* Images sliding in */}
        <motion.div
          className="project-popup__header__images"
          variants={imageVariant}
        >
          {projectDetails?.header_picture && (
            <motion.img
              src={`data:image/png;base64,${projectDetails?.header_picture}`}
              alt={`${projectDetails?.title} header`}
              className="project-popup__header__1"
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
              className="project-popup__header__2"
              layoutId="demoImage"
              onClick={() => setSelectedImage("demoImage")}
              whileHover={{ rotate: -8, translateY: -50, zIndex: 5 }}
              whileTap={{ scale: 0.9, borderRadius: "10px" }}
            />
          )}
        </motion.div>

        <div className="project-popup__header__background"></div>

        {projectDetails?.demo_picture && projectDetails?.header_picture && (
          <motion.div
            className="project-popup__header__text"
            variants={titleVariant}
          >
            Click on these for a better look!
          </motion.div>
        )}
      </div>

      {/* Right Side - Text Content */}
      <div className="project-popup__content">
        {/* Title sliding in */}
        <motion.h2 variants={titleVariant}>{projectDetails?.title}</motion.h2>

        {/* Descriptions staggered */}
        <motion.div
          variants={descriptionVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="project-popup__content__description"
            variants={itemVariant}
          >
            {projectDetails?.description1}
          </motion.p>
          <motion.p
            className="project-popup__content__description"
            variants={itemVariant}
          >
            {projectDetails?.description2}
          </motion.p>
          <motion.p
            className="project-popup__content__description lastDesc"
            variants={itemVariant}
          >
            {projectDetails?.description3}
          </motion.p>
        </motion.div>

        {/* Tech Stack with staggered entry */}
        {/* <div className="project-popup__header__stack">
          {projectDetails?.frontend_stack && (
            <motion.div
              variants={listVariant}
              initial="hidden"
              animate="visible"
            >
              <h3>Frontend</h3>
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
              <h3>Backend</h3>
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
              <h3>Tech Stack:</h3>
              <motion.ul>
                {projectDetails?.tech_stack.map((tech, index) => (
                  <motion.li key={index} variants={itemVariant}>
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </div> */}

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
          {projectDetails?.project_url && projectDetails?.demo_link && (
            <p> / </p>
          )}
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
    </motion.section>
  );
};

export default ProjectPopUp;
