import React, { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";
import TextSpinnerLoader from "./TextSpinAnimation";

const siteMessages = [
  "Hey, thanks for stopping by!",
  "Welcome!",
  "Nice to meet you!",
  "Hi, I'm Isaac!",
];

// Spiral ordering algorithm for the exit animation
const calculateSpiralOrder = (gridSize) => {
  const spiralOrder = [];
  const matrix = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(null)
  );

  let value = 0;
  let rowStart = 0;
  let rowEnd = gridSize - 1;
  let colStart = 0;
  let colEnd = gridSize - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Traverse right across the top row
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = value++;
    }
    rowStart++;

    // Traverse down the right column
    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = value++;
    }
    colEnd--;

    // Traverse left across the bottom row
    if (rowStart <= rowEnd) {
      for (let col = colEnd; col >= colStart; col--) {
        matrix[rowEnd][col] = value++;
      }
    }
    rowEnd--;

    // Traverse up the left column
    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        matrix[row][colStart] = value++;
      }
    }
    colStart++;
  }

  // Flatten the matrix to get the spiral order as a list
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      spiralOrder.push({ row, col, order: matrix[row][col] });
    }
  }

  return spiralOrder;
};

const Square = ({ row, col, centerX, centerY, shouldExit, spiralOrder }) => {
  // Find the spiral index for the current square
  const spiralIndex = spiralOrder.find(
    (square) => square.row === row && square.col === col
  ).order;

  const distanceToCenter = Math.sqrt(
    Math.pow(row - centerY, 2) + Math.pow(col - centerX, 2)
  );

  const scaleAnimationDelay = distanceToCenter * 0.45;
  const spiralAnimationDelay = spiralIndex * 0.15;
  const animationDuration = 0.8;

  const variants = {
    initial: { scale: 0 },
    enter: {
      scale: 1,
      transition: {
        duration: 0.9,
        delay: scaleAnimationDelay,
      },
    },
    exit: {
      rotateY: 180,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: spiralAnimationDelay,
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
  const [siteMessage, setSiteMessage] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * siteMessages.length);
    setSiteMessage(siteMessages[randomNumber]);
  }, []);

  const gridSize = 5; // 5x5 grid
  const centerX = (gridSize - 1) / 2;
  const centerY = (gridSize - 1) / 2;

  const [shouldExit, setShouldExit] = useState(false); // Controls when the squares exit
  const spiralOrder = calculateSpiralOrder(gridSize); // Calculate the spiral order once

  // UseEffect to trigger the exit animation after the squares load in
  useEffect(() => {
    const totalLoadDuration =
      2 + Math.sqrt(Math.pow(centerY, 2) + Math.pow(centerX, 2)) * 0.5;

    const timer = setTimeout(() => {
      setShouldExit(true);
    }, totalLoadDuration * 1500);

    return () => clearTimeout(timer);
  }, [centerX, centerY]);

  // Creates the grid of squares
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
            shouldExit={shouldExit} // Tells the squares to exit
            spiralOrder={spiralOrder} // Pass the spiral order to each square
          />
        );
      }
    }
    return squares;
  };

  return (
    <motion.div className="siteload">
      <motion.h1
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotateY: [0, 0, 90] }}
        transition={{
          opacity: { duration: 1, ease: "easeInOut", delay: 3 },
          rotateY: { duration: 0.5, ease: "easeInOut", delay: 8.35 },
        }}
      >
        {siteMessage}
      </motion.h1>
      <motion.div className="foreground">{renderSquares()}</motion.div>
    </motion.div>
  );
};

export default Foreground;
