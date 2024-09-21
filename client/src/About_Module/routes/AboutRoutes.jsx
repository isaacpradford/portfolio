import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../AboutPage";

export const AboutRoutes = () => {
  return (
    // About page
    <Routes>
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
};
