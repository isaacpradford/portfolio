import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "../Components/Sections/Header";

import HomePage from "./HomePage";
import SkillsPage from "./SkillsPage";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import TestimonialPage from "./TestimonialsPage";
import ContactPage from "./ContactPage";

import Background from "../Components/Sections/Background";
import Foreground from "../Components/Animations/SiteLoadAnimation";

import { motion, useScroll } from "framer-motion";
import Page from "../Components/Page";
import WhatPage from "../pages/WhatPage";

import logo from "../assets/logo_blue.png";

import { useColor } from "../functions/ColorContext";

const AllPages = () => {
  const [showContent, setShowContent] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500);

    const animationTimer = setTimeout(() => {
      setAnimationFinished(true);
    }, 5800);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  // // Sets up window dimension updating for "responsiveness"
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set colors between loads
  const { projectColor } = useColor();

  useEffect(() => {
    document.documentElement.style.setProperty("--project-color", projectColor);
  }, [projectColor]);

  return (
    <>
      {/* Unrenders the loading animation when it's finished so that you can click on links again */}
      {windowDimensions.width < 800 ? (
        <div className="responsiveness">
          <h1 className="responsiveness__warning">
            This website looks better on larger devices!
          </h1>
          <img src={logo} className="responsiveness__logo" />
        </div>
      ) : (
        <HelmetProvider>
          <Background />
          {!animationFinished ? <Foreground /> : <></>}
          {!showContent ? (
            <></>
          ) : (
            <>
              <Header />
                  <HomePage />
                  
              <Page id="WhatIDo">
                <WhatPage />
                  </Page>
                  
              <Page id={"Projects"}>
                <ProjectPage />
              </Page>
                  
              <Page id={"Skills"}>
                <SkillsPage />
              </Page>

              <Page id={"Experience"}>
                <ExperiencePage />
              </Page>
              <Page id={"Testimonials"}>
                <TestimonialPage />
              </Page>
              <Page id={"Contact"}>
                <ContactPage />
              </Page>

              {/* Progress circle */}
              <figure className="progress">
                <svg
                  id="progress"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="bg"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                  />
                </svg>
              </figure>
            </>
          )}
        </HelmetProvider>
      )}
    </>
  );
};

export default AllPages;
