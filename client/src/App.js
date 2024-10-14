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

import ParallaxSection from "./Components/ParallaxSection";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

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
      {!showContent ? (
        <></>
      ) : (
        <>
          <HelmetProvider>
            <Header />
            <Background />
            <HomePage />
            <SkillsPage />
            <ExperiencePage />
            <Blank />
            <ProjectPage />
            <Blank />
            <TestimonialPage />
            <Blank />
            <ContactPage />

            {/* For undefined URLS, we can put this to make a 404 page */}
            {/* <Routes>
              <Route path="*" element={<NoPage />} />
            </Routes> */}
          </HelmetProvider>
        </>
      )}
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
