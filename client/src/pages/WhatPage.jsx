import React, { useState, useEffect, useRef } from "react";
import { LiaLaptopCodeSolid, LiaPaletteSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineConstruction } from "react-icons/md";

const WhatPage = () => {
  return (
    <div className="b-what">
      <div className="b-what__title">
        <h1>I build scalable and engaging web applications</h1>
        <h3>
          I work in fast paced development environments to deliver high-quality
          and scalable code.
        </h3>
      </div>

      <div className="b-what__cards">
        <div className="b-what__cards__card">
          <div className="b-what__cards__card__content">
            <h1>Design</h1>
            <LiaPaletteSolid
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              From design to deployment, I can bring a unique vision to web
              applications.
            </p>
          </div>
        </div>
        <div className="b-what__cards__card">
          <div className="b-what__cards__card__content">
            <h1>Develop</h1>
            <LiaLaptopCodeSolid
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Using modern web technologies, I write high quality code that
              improves user experience
            </p>
          </div>
        </div>
        <div className="b-what__cards__card">
          <div className="b-what__cards__card__content">
            <h1>Maintain</h1>
            <MdOutlineConstruction
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Whether it's using developed languages or new ones, I make sure
              code is written to last.
            </p>
          </div>
        </div>
        <div className="b-what__cards__card">
          <div className="b-what__cards__card__content">
            <h1>Collaborate</h1>
            <RiTeamLine
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Whether remotely or in person, I can fit into any team and become
              a vital member.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPage;
