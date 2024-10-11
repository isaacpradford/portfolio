import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

const topBarVariant = {
  hidden: { y: "-100%" },
  visible: {
    y: "-25%", // Move down
    transition: {
      duration: 1,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const popupVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: {
    opacity: 1,
    scale: 0.1,
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

// Popup component
const Popup = ({ isOpen, onClose, component: Component, contentLoaded }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={popupVariant}
      >
        {/* Top 3 bars lowering */}
        <motion.div
          className="bars top-bars"
          variants={topBarVariant}
          initial="hidden"
          animate={contentLoaded ? "exit" : "visible"}
          exit="exit"
        >
          <motion.div className="bar" variants={topBarVariant} />
          <motion.div className="bar" variants={topBarVariant} />
          <motion.div className="bar" variants={topBarVariant} />
          <motion.div className="bar" variants={topBarVariant} />
          <motion.div className="bar" variants={topBarVariant} />
        </motion.div>

        <div className="popup-logo">
          <Link to="home" smooth={true} duration={250} onClick={onClose}>
            ISAAC
          </Link>
        </div>

        <div className="popup-content">
          <Component onClose={onClose} />
          <button className="popup-close" onClick={onClose}>
            X
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
