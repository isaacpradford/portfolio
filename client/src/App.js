import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import "./global.css";

import { motion, useScroll, useSpring } from "framer-motion";

import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

import Background from "./Components/Background";
import Blank from "./Components/Blank";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Sets default color
  document.documentElement.style.setProperty("--project-color", "#06c073");

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Header />
      <HelmetProvider>
        <Background />
        <HomePage />
        <Blank />
        <SkillsPage />
        <Blank />
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
