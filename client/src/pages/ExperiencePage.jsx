import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ExperiencePage = () => {
  const ref = useRef(null);

  // Scrolly is tracking line on the left, adjusting line height as it scrolls
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["120%", "11%"]);
  const smoothLineHeight = useSpring(lineHeight, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div id="experience" className="b-experience page" ref={ref}>
      <motion.h1 className="b-experience__title">Experience:</motion.h1>

      {/* Animated moving line on the left */}
      <motion.div
        className="b-experience__timeline__line"
        style={{ scaleY: smoothLineHeight }}
      ></motion.div>

      <div className="b-experience__timeline">
        <h1 className="b-experience__timeline__subtitle">Work Experience</h1>
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h4>Subitt.io</h4>
            <p>Feb 2024 - April 2025</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Full Stack Web Developer</h4>
            <p>
              Developed scalable web and mobile applications, managed REST APIs
              in fast-paced, startup environment using React, React Native,
              Javascript, Typescript, SCSS, Mongoose, NodeJS, and Express.
            </p>
            <ul>
              <li>
                Took on many roles to research, design, and develop user
                interfaces, like the new location-based functionalities with
                Mapbox and Google Places integrations
              </li>
              <li>
                Collaborated remotely with team to build multiple user-facing
                applications, such as; a business dashboard redesign with
                in-depth analytics, a responsive product creation page, and an
                administrative web application enabling website management, user
                management, and an integration with Google Analytics
              </li>
            </ul>
          </div>
        </div>
        <h1 className="b-experience__timeline__subtitle">Education</h1>
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>BYU - Idaho</h5>
            <p>2019 - 2024</p>
          </div>
          <div className="b-experience__timeline__entry__role">
            <h4>Bachelor of Science in Software Engineering</h4>
            <p>
              Developed an understanding of modern software engineering
              principles, focusing on creating scalable, maintainable, and
              high-performance software.
            </p>
            <ul>
              <li>
                Trained to think critically and solve complex problems using old
                and modern development frameworks
              </li>
              <li>
                Learned to develop in fast-paced environments and how to adapt
                to latest tools and technology
              </li>
              <li>Emphasized collaboration through team-based projects</li>
            </ul>
          </div>
        </div>
        {/* <h1 className="b-experience__timeline__subheading">Certifications</h1> */}
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>BYU - Idaho</h5>
            <p>Winter 2024</p>
          </div>
          <div className="b-experience__timeline__entry__role certificates">
            <h4>Certificate of Full Stack Web Development</h4>
            <p>
              Developed skills to design and build end-to-end web applications,
              integrating databases, servers, and RESTful APIs into user
              interfaces into seamless, functional systems.
            </p>
            <ul>
              <li>
                Prioritized building responsive, user-friendly applications
                using JavaScript, React, and style languages like SCSS/CSS and
                Tailwind.
              </li>
              <li>
                Utilized NodeJS, Express, NextJS, with both SQL and noSQL
                systems
              </li>
            </ul>
          </div>
        </div>
        <div className="b-experience__timeline__entry">
          <div className="b-experience__timeline__entry__date">
            <h5>BYU - Idaho</h5>
            <p>Summer 2024</p>
          </div>
          <div className="b-experience__timeline__entry__role certificates">
            <h4>Certificate of Software Design</h4>
            <p>
              Gained an in-depth understanding of software architecture with an
              emphasis on object-oriented design principles.
            </p>
            <ul>
              <li>
                Focused on design tools and how to use them to create
                maintainable, cohesive, convenient software systems that are
                aligned with customer needs.
              </li>
              <li>
                Used and implemented creational, structural, and behavioral
                Design Patterns to optimize code structure and enhance software
                scalability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
