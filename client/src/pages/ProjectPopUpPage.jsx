import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { getProjectInfo } from "../functions/Projects";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";

// This is the page that pops up when a project name is clicked
const ProjectPopUp = ({ onClose, projectTitle }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await getProjectInfo(projectTitle);
        setProjectDetails(response);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectTitle]);

  // Set the color of the box to be the color received from db
  document.documentElement.style.setProperty(
    "--project-color",
    projectDetails?.color
  );

  return (
    <section className="popup-overlay project-popup">
      <div className="project-popup__header">
        <motion.div
          className="project-popup__header__images"
          whileHover={{ scale: 1.1 }}
        >
          {projectDetails?.header_picture && (
            <motion.img
              src={`data:image/png;base64,${projectDetails?.header_picture}`}
              alt={`${projectDetails?.title} header`}
              className="project-popup__header__1"
              layoutId="headerImage"
              onClick={() => setSelectedImage("headerImage")}
              whileHover={{ rotate: 20, translateY: -50, zIndex: 5 }}
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
              whileHover={{ rotate: -10, translateY: -50, zIndex: 5 }}
              whileTap={{ scale: 0.9, borderRadius: "10px" }}
            />
          )}
        </motion.div>
        <div className="project-popup__header__background"></div>
        <div className="project-popup__header__text">Hover / Click on me!</div>
      </div>

      {/* Right Side - Text Content */}
      <div className="project-popup__content">
        <h2>{projectDetails?.title}</h2>

        <p className="project-popup__content__description">
          {projectDetails?.description1}
        </p>
        <p className="project-popup__content__description">
          {projectDetails?.description2}
        </p>
        <p className="project-popup__content__description">
          {projectDetails?.description3}
        </p>

        <div className="project-popup__content__links">
          {projectDetails?.demo_link && (
            <a
              href={`https://${projectDetails.demo_link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
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
        </div>

        {/* Tech Stack */}
        <div className="project-popup__content__stack">
          {projectDetails?.frontend_stack && (
            <div>
              <h3>Frontend</h3>
              <ul>
                {projectDetails?.frontend_stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {projectDetails?.backend_stack && (
            <div>
              <h3>Backend</h3>
              <ul>
                {projectDetails?.backend_stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {projectDetails?.tech_stack && (
            <div>
              <h3>Tech Stack:</h3>
              <ul>
                {projectDetails?.tech_stack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="project-popup__contact">
          <h2>Want to chat?</h2>
          <p>Email me at isaacpradford@gmail.com</p>
          <p>
            or reach me through my{" "}
            <Link to="contact" smooth={true} duration={500} onClick={onClose}>
              contact
            </Link>{" "}
            form!
          </p>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="popup-overlay focus-image project-popup__header__images"
              layoutId={selectedImage}
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.98 }}
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
              <h1>click again to close...</h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectPopUp;
