import React, { useEffect, useRef } from "react";
import { LiaLaptopCodeSolid, LiaPaletteSolid } from "react-icons/lia";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineConstruction } from "react-icons/md";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const WhatPage = () => {
  // Ref for the page
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Left line animation that changes line height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["100%", "11%"]);
  const smoothLineHeight = useSpring(lineHeight, {
    stiffness: 100,
    damping: 30,
  });

  // Adjusts card position and inner card content on mouse move
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".b-what__cards__card");
    cards.forEach((card) => {
      const speed = 1;
      const x = (window.innerWidth - e.pageX * speed) / 150;
      const y = (window.innerHeight - e.pageY * speed) / 150;

      card.style.transform = `translate(${x}px, ${y}px)`;
    });

    const cardContents = document.querySelectorAll(
      ".b-what__cards__card__content"
    );
    cardContents.forEach((card) => {
      const speed = 1;
      const x = (window.innerWidth - e.pageX * speed) / 150;
      const y = (window.innerHeight - e.pageY * speed) / 150;

      card.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="b-what" ref={ref}>
      <motion.div
        className="b-what__line"
        style={{ scaleY: smoothLineHeight }}
      ></motion.div>
      <div className="b-what__title">
        <h4>What do I do?</h4>
        <h1>I build scalable and engaging web applications</h1>
        <h3>
          I work in fast paced development environments to deliver high-quality
          and scalable code.
        </h3>
      </div>

      <div className="b-what__cards">
        <motion.div className="b-what__cards__card" initial={{ scale: 1 }}>
          <div className="b-what__cards__card__content">
            <h1>Design</h1>
            <LiaPaletteSolid
              opacity={0.5}
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              From design to deployment, I can bring a unique vision to web
              applications.
            </p>
          </div>
        </motion.div>
        <motion.div className="b-what__cards__card" initial={{ scale: 1 }}>
          <div className="b-what__cards__card__content">
            <h1>Develop</h1>
            <LiaLaptopCodeSolid
              opacity={0.5}
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Using modern web technologies, I write high quality code that
              improves user experience.
            </p>
          </div>
        </motion.div>
        <motion.div className="b-what__cards__card" initial={{ scale: 1 }}>
          <div className="b-what__cards__card__content">
            <h1>Maintain</h1>
            <MdOutlineConstruction
              opacity={0.5}
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Whether it's using developed languages or new ones, I make sure
              code is written to last.
            </p>
          </div>
        </motion.div>
        <motion.div className="b-what__cards__card" initial={{ scale: 1 }}>
          <div className="b-what__cards__card__content">
            <h1>Collaborate</h1>
            <RiTeamLine
              opacity={0.5}
              size={80}
              fill="var(--project-color)"
              style={{ minWidth: "80px " }}
            />
            <p>
              Whether remotely or in person, I can fit into any team and become
              a vital member.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatPage;
