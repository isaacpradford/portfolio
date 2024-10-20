import React, { useState, useEffect, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import "./global.css";

import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

import Background from "./Components/Background";
import Blank from "./Components/Blank";
import Foreground from "./Components/SiteLoadAnimation";
import ScrollingBanner from "./Components/LoopingBanner";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Page from "./Components/Page";
import AboutPage from "./pages/AboutPage";
import WhatPage from "./pages/WhatPage";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    const animationTimer = setTimeout(() => {
      setAnimationFinished(true);
    }, 8900);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  // Sets default color
  document.documentElement.style.setProperty("--project-color", "#468cdd");

  return (
    <>
      {/* Unrenders the loading animation when it's finished so that you can click on links again */}
      {!animationFinished ? <Foreground /> : <></>}
      <HelmetProvider>
        <Background />
        {!showContent ? (
          <></>
        ) : (
          <>
            <Header />
            <HomePage />
            <Page id={"Skills"}>
              <SkillsPage />
            </Page>
            <Page id={"Projects"}>
              <ProjectPage />
            </Page>
            <Page id="WhatIDo">
              <WhatPage />
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
              <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
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
    </>
  );
}

export default App;
