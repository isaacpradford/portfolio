import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../ContactPage";

export const ContactRoutes = () => {
  return (
    // Contact page
    <Routes>
      <Route path="/" element={<ContactPage />} />
    </Routes>
  );
};
