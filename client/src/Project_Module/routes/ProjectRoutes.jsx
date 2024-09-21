import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import ProjectPage from "../ProjectPage";
import NoPage from "../../pages/NoPage";

export const ProjectRoutes = () => {
  const title = useParams();
  return (
    // Home page
    <Routes>
      <Route path="/" element={<ProjectPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
