import React, { useState, useEffect } from "react";
import Popup from "../Components/Popup";
import ProjectPopUp from "./ProjectPopUpPage";

const ProjectPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => setPopupOpen(true);
  const handlePopupClose = () => setPopupOpen(false);

  const [projects, setProjects] = useState([
    // { title: "" },
    { id: 1, title: "Raft" },
    { id: 2, title: "Subitt" },
    { id: 3, title: "Twitter Bots" },
    { id: 4, title: "Portfolio" },
    { id: 5, title: "PLMS" },
    { id: 6, title: "" }, // Add space before and after each loop
  ]);

  // Duplicate the list a bunch of times for the marquee
  useEffect(() => {
    setProjects([]);
  }, []);

  return (
    <div id="projects" className="b-projects">
      <h1 className="b-projects__title">Projects</h1>
      <ul className="b-projects__marquee">
        {projects?.map((project, index) => (
          <li key={index} className={`b-projects__marquee__list`}>
            <div
              onClick={() => {
                isPopupOpen ? handlePopupClose() : handlePopupOpen();
              }}
            >
              {project?.title}
            </div>
          </li>
        ))}
      </ul>

      <div className="b-projects__cardList">
        <ul className="--1">
          <li
            className="card"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            <h3>RAFT</h3>
            <p>I had *every* user on the app following me</p>
            <p>5/2024</p>
          </li>
          <li
            className="card"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            <h3>PLMS</h3>
            <p>Personal Learning Modules, or Plums for short</p>
            <p>2/2024</p>
          </li>
        </ul>
        <ul className="--2">
          <li
            className="card"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            <h3>Subitt</h3>
            <p>Subscribe how you want to!</p>
            <p>3/24 - Present</p>
          </li>
          <li
            className="card"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            <h3>Portfolio</h3>
            <p>The website you're looking at right now</p>
            <p>Always a work in progress...</p>
          </li>
          <li className="card empty"></li>
        </ul>
        <ul className="--3">
          <li
            className="card"
            onClick={() => {
              isPopupOpen ? handlePopupClose() : handlePopupOpen();
            }}
          >
            <h3>Twitter Bots</h3>
            <p>Twitter bots from before Twitter wasn't Twitter</p>
            <p>10/23</p>
          </li>
          <li className="card empty"></li>
        </ul>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        component={ProjectPopUp}
      />
    </div>
  );
};

export default ProjectPage;
