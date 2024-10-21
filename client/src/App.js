import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./global.css";

import ProjectPopUp from "./pages/ProjectPopUpPage";
import AllPages from "./pages/AllPages";
import { ColorProvider } from "./functions/ColorContext";
import CustomCursor from "./Components/Animations/Cursor";

function App() {
  return (
    <HelmetProvider>
      <ColorProvider>
        <CustomCursor />
        <Routes>
          <Route>
            <Route path="/" element={<AllPages />} />
            <Route path="/:projectTitle" element={<ProjectPopUp />} />
          </Route>
        </Routes>
      </ColorProvider>
    </HelmetProvider>
  );
}

export default App;
