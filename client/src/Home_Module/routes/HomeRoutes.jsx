import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";

export const HomeRoutes = () => {
  return (
    // Home page
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
