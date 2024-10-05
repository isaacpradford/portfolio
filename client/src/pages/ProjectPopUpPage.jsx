import React from "react";
import { Link } from "react-scroll";
// import axios from "axios";

// This is the page that pops up when a project name is clicked
const ProjectPopUp = ({ onClose }) => {
  
  return (
    <section className="b-about">
      <div className="b-about__contact">
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
    </section>
  );
};

export default ProjectPopUp;
