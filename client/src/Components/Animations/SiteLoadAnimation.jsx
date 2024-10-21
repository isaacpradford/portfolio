import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Square = ({ row, col, centerX, centerY, shouldExit }) => {
  // Distance from the center to control the delay for both enter and exit
  const distanceToCenter = Math.sqrt(
    Math.pow(row - centerY, 2) + Math.pow(col - centerX, 2)
  );

  const scaleAnimationDelay = distanceToCenter * 0.25;
  const animationDuration = 0.4;

  const variants = {
    initial: { scale: 0 },
    enter: {
      scale: 1,
      transition: {
        duration: 0.8,
        delay: scaleAnimationDelay,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.8,
        delay: scaleAnimationDelay,
      },
    },
  };

  return (
    <motion.div
      className="square"
      variants={variants}
      initial="initial"
      exit="exit"
      animate={shouldExit ? "exit" : "enter"}
      transition={{
        duration: animationDuration,
        ease: "easeInOut",
      }}
    />
  );
};

const Foreground = () => {
  const gridSize = 8;
  const centerX = (gridSize - 1) / 2;
  const centerY = (gridSize - 1) / 2;

  const [shouldExit, setShouldExit] = useState(false);

  // Trigger exit animation after the squares load in and control logo visibility
  useEffect(() => {
    const totalLoadDuration =
      2 + Math.sqrt(Math.pow(centerY, 2) + Math.pow(centerX, 2)) * 0.5;

    // Exit squares
    const exitTimer = setTimeout(() => {
      setShouldExit(true);
    }, (totalLoadDuration + 1) * 550);

    return () => {
      clearTimeout(exitTimer);
    };
  }, []);

  // Renders squares
  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        squares.push(
          <Square
            key={`${row}-${col}`}
            row={row}
            col={col}
            centerX={centerX}
            centerY={centerY}
            shouldExit={shouldExit}
          />
        );
      }
    }
    return squares;
  };

  return (
    <div className="siteload">
      {/* <motion.h1
        className="loadingLogo"
        animate={shouldExit ? { opacity: 0 } : { opacity: 1 }}
        transition={{
          opacity: {
            duration: 0.8,
            ease: "easeInOut",
            delay: 1.25,
          },
        }}
      >
        IR
      </motion.h1> */}
      <motion.div className="foreground">{renderSquares()}</motion.div>
    </div>
  );
};

export default Foreground;
