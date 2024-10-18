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
import AboutPage from "./pages/AboutPage";
import WhatPage from "./pages/WhatPage";

function Page({ id, children }) {
  const [playedAnimation, setPlayedAnimation] = useState(false);
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView && !playedAnimation) {
      setPlayedAnimation(true);
    }
  }, [isInView, playedAnimation]);

  return (
    <motion.section ref={ref} className="page" id={id}>
      {/* Parallax title */}
      <motion.h1
        className="page-title"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -325 : 0 }}
        exit={{ y: 300 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        {id}
        {/* <ScrollingBanner title={id} baseVelocity={2} /> */}
      </motion.h1>

      {/* Page content with slower movement */}
      <motion.div
        className="page-content"
        initial={{ x: 0, scale: !playedAnimation ? 0.1 : 1 }}
        animate={{ scale: isInView && !playedAnimation ? 1 : 0.95 }}
        exit={{ x: 0 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

function App() {
  const [showContent, setShowContent] = useState(true);
  const [animationFinished, setAnimationFinished] = useState(true);

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
            {/* <Header /> */}
            <HomePage />
            {/* <AboutPage /> */}
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
            {/* <Blank />
              <SkillsPage />
              <Blank />

              <ExperiencePage />
              <Blank />
              <ProjectPage />
              <Blank />
              <TestimonialPage />
              <Blank /> */}
            {/* </div> */}
          </>
        )}
      </HelmetProvider>
    </>
  );
}

export default App;

{
  /* <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/skills" element={<SkillsPage />} />
  <Route path="/experience" element={<ExperiencePage />} />
  <Route path="/projects" element={<ProjectPage />} />
  <Route path="/testimonials" element={<TestimonialPage />} />
  <Route path="/contact" element={<ContactPage />} /> */
}
