import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const SkillsPage = () => {
  return (
    <div id="skills" className="b-skills">
      <div className="b-skills__languages">
        <h1>Languages</h1>

        <div className="b-skills__pillBox">
          <ul className="b-skills__pillBox--1">
            <li className="pill"></li>
            <li className="pill">React</li>
            <li className="pill">Javascript</li>
            <li className="pill">Typescript</li>
            {/* <li className="pill">Tailwind</li> */}
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
          <p>MongoDB, MySQL, SQLite, PostgreSQL</p>
          <p>Prisma, Mongoose, PlanetScale</p>
        </div>
      </div>

      <div className="b-skills__other">
        <svg
          className="svgwave"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="squarepath"
            d="M0 900 V100 A100 100 0 0 1 100 0 H900 A100 100 0 0 1 1000 100 V900 A100 100 0 0 1 900 1000 H100 A100 100 0 0 1 0 900 Z"
            fill="none"
            stroke="transparent"
          ></path>

          <text textAnchor="start">
            <textPath className="my-text" href="#squarepath" startOffset="0%">
              <animate
                attributeName="startOffset"
                from="-600%"
                to="100%"
                begin="0s"
                dur="600s"
                repeatCount="indefinite"
              ></animate>
              {/* ==================================================================
              ==================================================================
              ==================================================================
              ==================================================================
              ==================================================================
              ==================================================================
              ================================================================== */}
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
              OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS OTHER SKILLS
            </textPath>
          </text>
        </svg>

        <div className="b-skills__other__inside">
          <p>In addition to languages, I can also:</p>
        </div>
      </div>

      <div className="b-skills__asWell">
        <FaArrowAltCircleRight size={40} />
        <p>
          Git/Github, Git/Github + version control systems, VS/VSC, XCode,
          Rider, Jira, Trello, Adobe Cloud, Microsoft Suite
        </p>
      </div>
    </div>
  );
};

export default SkillsPage;
