import React, { useState, useEffect } from "react";
import Popup from "../Components/Popup";
import ProjectPopUp from "./ProjectPopUpPage";
import { Link } from "react-scroll";

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
  // useEffect(() => {
  //   setProjects([]);
  // }, []);

  return (
    <div id="projects" className="b-projects">
      <h1 className="b-projects__title">Projects</h1>
      <ul className="b-projects__marquee">
        {Array.from({ length: 10 }, () => projects)
          .flat()
          .map((project, index) => (
            <li key={index} className="b-projects__marquee__list">
              <Link
                onClick={() => {
                  isPopupOpen ? handlePopupClose() : handlePopupOpen();
                }}
              >
                {project?.title}
              </Link>
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
            className="card"
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
          <li className="card empty"></li>
          <li
            className="card"
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
          <li
            className="card"
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
            className="card"
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
