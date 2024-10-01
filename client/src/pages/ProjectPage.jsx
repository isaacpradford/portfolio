import React from "react";

const ProjectPage = () => {
  return (
    <div id="projects" className="b-projects">
      project page
      <div className="b-projects__title">
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
        <p>Projects</p>
      </div>
      <div className="b-projects__cardList">
        <ul>
          <li className="b-projects__card">
            <h3>RAFT</h3>
          </li>
          <li className="b-projects__card">
            <h3></h3>
          </li>
        </ul>
        <ul>
          <li className="b-projects__card">
            <h3>Subitt</h3>
          </li>
          <li className="b-projects__card">
            <h3>Portfolio</h3>
          </li>
          <li className="b-projects__card"></li>
        </ul>
        <ul>
          <li className="b-projects__card">
            <h3>Twitter Bots</h3>
          </li>
          <li className="b-projects__card"></li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
