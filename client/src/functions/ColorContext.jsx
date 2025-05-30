// src/ColorContext.js
import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  // Set default color for the entire website
  const [projectColor, setProjectColor] = useState("#f75528");
  const [darkMode, setDarkMode] = useState(false);
  const [invert, setInvert] = useState(darkMode);

  // Set colors that change when dark mode is pressed
  const colors = {
    light: {
      projectColor: projectColor,
      backgroundColor: "#fff",
    },
    dark: {
      projectColor: projectColor,
      backgroundColor: "#fff",
    },
  };

  // Night mode inversion
  const invertColors = document.documentElement.style.setProperty(
    "--invert",
    invert ? 0.9 : 0
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    setInvert(!invert);
  };

  return (
    <ColorContext.Provider
      value={{
        projectColor,
        setProjectColor,
        colors: darkMode ? colors.dark : colors.light,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
