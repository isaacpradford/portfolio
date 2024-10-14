import React, { useRef, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import ScrollingBanner from "../Components/LoopingBanner";

const SkillsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "some",
  });

  return (
    <motion.div
      id="skills"
      className="b-skills"
      ref={ref}
      style={
        {
          // transition: "1s",
          // backgroundColor: isInView ? "black" : "yellow",
        }
      }
      animate={{
        scale: isInView ? "0" : "1",
      }}
    >
      <div className="b-skills__title">
        <ScrollingBanner title="Languages+Skills" baseVelocity={2} />
      </div>
      <motion.div className="b-skills__boxes"></motion.div>
      <div className="b-skills__languages">
        {/* <h1>Languages</h1> */}

        <div className="b-skills__pillBox">
          <ul className="b-skills__pillBox--1">
            <li className="pill"></li>
            <li className="pill">React</li>
            <li className="pill">Javascript</li>
            <li className="pill">Typescript</li>
          </ul>
          <ul className="b-skills__pillBox--2">
            <li className="pill"></li>
            <li className="pill">Node / Express</li>
            <li className="pill">Next</li>
            <li className="pill">tRPC</li>
          </ul>
          <ul className="b-skills__pillBox--3">
            <li className="pill"></li>
            <li className="pill">Python</li>
            <li className="pill">C#</li>
          </ul>
          <ul className="b-skills__pillBox--4">
            <li className="pill"></li>
            <li className="pill">Ruby</li>
            <li className="pill">C++</li>
          </ul>
          <ul className="b-skills__pillBox--5">
            <li className="pill"></li>
            <li className="pill">SCSS</li>
            <li className="pill">Tailwind</li>
          </ul>
          <ul className="b-skills__pillBox--6">
            <li className="pill"></li>
            <li className="pill">Databases</li>
            <FaArrowAltCircleRight size={40} />
          </ul>
        </div>

        <div className="b-skills__languages__databases">
          <p>
            MongoDB, MySQL, SQLite, PostgreSQL, Prisma, Mongoose, PlanetScale
          </p>
        </div>
      </div>

      <div className="b-skills__also">
        <h4>And I'm pretty good at...</h4>
        <p>
          Unit and Integration testing, Git/Github (and version control
          systems), VS/VSC, XCode, Rider, Jira, Trello, Microsoft Suite
        </p>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
