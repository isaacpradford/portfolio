import React, { useRef, useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import ScrollingBanner from "../Components/LoopingBanner";

const SkillsPage = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      id="skills"
      className="b-skills page"
      ref={ref}
      // style={{
      //   transition: "1s",
      //   backgroundColor: isInView ? "white" : "orange",
      // }}
    >
      <motion.div className="b-skills__boxes"></motion.div>
      <motion.div
        className="b-skills__languages"
        initial={{ x: 0 }}
        animate={{ x: isInView ? 0 : 2500 }}
        exit={{ x: 0 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* <h1>Languages</h1> */}

        <div className="b-skills__pillBox">
          <motion.div
            className="b-skills__title"
            animate={{ y: isInView ? 0 : -2060 }}
            exit={{ y: 0 }}
            transition={{
              duration: 5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <ScrollingBanner title="Languages+Skills" baseVelocity={2} />
          </motion.div>
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
          <h1>And I've used them with:</h1>

          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>PostgreSQL</li>
            <li>Prisma</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </motion.div>

      <div className="b-skills__also">
        <h4>In addition to...</h4>
        <p>
          Unit and Integration testing, Git/Github (and version control
          systems), VS/VSC, XCode, Rider, Jira, Trello, Microsoft Suite,
        </p>
        <p>I can also use...</p>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
