import React from "react";

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
            <li className="pill">Tailwind</li>
          </ul>
          <ul className="b-skills__pillBox--2">
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
            <li className="pill">Ruby</li>
            <li className="pill">C++</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
