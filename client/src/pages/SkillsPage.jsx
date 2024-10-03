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

      <div className="b-otherSkills">
        <h1 className="b-skills__other__background">
          <h4 className="b-skills__other__title">But what else can I do?</h4>
          <div className="b-skills__other__addition">
            <h3>In addition to those languages, I can also use:</h3>
            <ul className="pillbox">
              <li className="pill">Unit and Integration Testing</li>
              <li className="pill">Git/Github</li>
              <li className="pill">Version Control Systems</li>
              <li className="pill">VS/VSC</li>
              <li className="pill">Xcode</li>
              <li className="pill">Rider</li>
              <li className="pill">Jira</li>
              <li className="pill">Trello</li>
              <li className="pill">Adobe Suite</li>
              <li className="pill">Microsoft Suite</li>
            </ul>

            {/* <h4>And I'm pretty good at...</h4> */}
          </div>
        </h1>

        <div className="b-skills__other">
          <svg
            className="svgsquare"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              id="squarepath"
              d="M0 675 V75 A100 100 0 0 1 100 0 H900 A100 100 0 0 1 1000 75 V675 A100 100 0 0 1 900 750 H100 A100 100 0 0 1 0 675 Z"
              fill="none"
              stroke="transparent"
            />

            <text textAnchor="start">
              <textPath className="my-text" href="#squarepath" startOffset="0%">
                <animate
                  attributeName="startOffset"
                  from="-400%"
                  to="100%"
                  begin="0s"
                  dur="600s"
                  repeatCount="indefinite"
                ></animate>
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
          {/* <div className="b-skills__other__inside">
            <ul>
              <li className="slider">
                <label>FullStack Web Development</label>
                <input type="range" min="1" max="100" value="90" id="myRange" />
              </li>

              <li className="slider">
                <label>Creativity</label>
                <input type="range" min="1" max="100" value="65" id="myRange" />
              </li>

              <li className="slider">
                <label>Communication</label>
                <input type="range" min="1" max="100" value="75" id="myRange" />
              </li>
            </ul>

            <ul>
              <li className="slider">
                <label>API + Server Management</label>
                <input type="range" min="1" max="100" value="75" id="myRange" />
              </li>

              <li className="slider">
                <label>Problem-Solving</label>
                <input type="range" min="1" max="100" value="60" id="myRange" />
              </li>

              <li className="slider">
                <label>Interpersonal Skills</label>
                <input type="range" min="1" max="100" value="70" id="myRange" />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
