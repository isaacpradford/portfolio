import React from "react";
import { Link } from "react-scroll";

const AboutPage = ({ onClose }) => {
  return (
    <section className="b-about">
      <p className="b-about__banner">
        about about about about about about about about about about about about
      </p>
      <div className="b-about__description">
        <h1>About Me</h1>
        <p>
          From Design to Deployment, I specialize in making websites that are
          scalable, functional, and fashionable. It's my goal to help build
          durable websites for people and companies that represent their visual
          identity and align with their goals. I strive to build internet
          technologies that make living life on the web simpler.
        </p>

        <div className="b-about__description__bar"></div>
      </div>

      <div className="b-about__availability">
        <h3>Availability</h3>
        <h5>July 2024 - Present</h5>
        <p>Remote | Chicago, IL</p>
      </div>

      <div className="b-about__services">
        <h3>Services</h3>
        <ul>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>API Management</li>
          <li>Software Design</li>
        </ul>
      </div>

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

export default AboutPage;
