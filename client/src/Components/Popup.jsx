import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

const popupVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 1,
    scale: 0.1,
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

// Popup component
const Popup = ({ isOpen, onClose, component: Component }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div className="popup-overlay" variants={popupVariant}>
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
