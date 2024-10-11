import React from "react";
import { Link } from "react-scroll";
import me from "../assets/me.png";

const AboutPage = ({ onClose }) => {
  return (
    <section className="b-about">
      <div className="b-about__content">
        <div className="b-about__title">
          <h1>ABOUT ME</h1>
        </div>
        {/* <div className="b-about__image">
          <img src={me} alt="" srcSet={me} />
        </div> */}
        <div className="b-about__description">
          {/* <h1>About Me</h1> */}
          <p className="b-about__name">
            Hi! My name's Isaac, I'm 24 and I just graduated from BYU-Idaho with
            a Bachelor's degree in Software Engineering.
          </p>

          <p className="b-about__bold">
            From Design to Deployment, I specialize in making websites that are
            scalable and functional.
          </p>

          <p>
            It's my goal to help build durable websites for people and companies
            that represent their visual identity and align with their goals.
          </p>
          {/* I strive to build internet technologies that make living life on the web
        simpler. */}
          <div className="b-about__description__bar"></div>
        </div>

        <div className="b-about__right">
          <div className="b-about__availability">
            <h3>Availability</h3>
            <h5>July 2024 - Present</h5>
            <p>Remote | Chicago, IL</p>
          </div>

          <div className="b-about__services">
            <h3>Services</h3>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>API Management</p>
            <p>Software Design</p>
          </div>
        </div>
      </div>
      <div className="b-about__contact">
        <h2>Want to chat?</h2>
        <p>Email me at isaacpradford@gmail.com</p>
        <p>
          or reach me through my{" "}
          <Link
            className="b-about__bold"
            to="contact"
            smooth={true}
            duration={500}
            onClick={onClose}
          >
            contact
          </Link>{" "}
          form!
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
