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

function Page({ id, children }) {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.section ref={ref} className="page" id={id}>
      {/* Parallax title */}
      <motion.h1
        className="page-title"
        initial={{ y: 100 }}
        animate={{ y: isInView ? -360 : 0 }}
        exit={{ y: 100 }}
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
        initial={{ x: 0, scale: 0.9 }}
        animate={{ scale: isInView ? 1 : 0.9 }}
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
  document.documentElement.style.setProperty("--project-color", "#fe0222");

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
            <div className="pageContainer">
              <Page id={"home"}>
                <HomePage />
              </Page>
              <Page id={"skills"}>
                <SkillsPage />
              </Page>
              <Page id={"projects"}>
                <ProjectPage />
              </Page>
              <Page id={"experience"}>
                <ExperiencePage />
              </Page>
              <Page id={"Testimonials"}>
                <TestimonialPage />
              </Page>
              <Page id={"Contact"}>
                <ContactPage />
              </Page>
              {/* <Blank />
              <SkillsPage />
              <Blank />

              <ExperiencePage />
              <Blank />
              <ProjectPage />
              <Blank />
              <TestimonialPage />
              <Blank /> */}
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
            </div>
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
