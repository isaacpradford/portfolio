import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Components/Header";
import "./global.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import TestimonialPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <Header />
      <HelmetProvider>
        <HomePage />
        {/* <AboutPage /> Make this a popup  */}
        <SkillsPage />
        <ExperiencePage />
        <ProjectPage />
        <TestimonialPage />
        <ContactPage />

        <Routes>
          {/* For undefined URLS, we can put this to make a 404 page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
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
