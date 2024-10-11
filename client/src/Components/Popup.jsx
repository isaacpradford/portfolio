import React from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const Popup = ({ isOpen, onClose, component: Component }) => {
  if (!isOpen) return null;

  // popup animation
  const popupVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: { opacity: 0, scale: 0.1, y: "-100%", transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={popupVariant}
      >
        <div className="popup-logo">
          <Link to="home" smooth={true} duration={250} onClick={onClose}>
            ISAAC
          </Link>
        </div>

        <div className="popup-content">
          {/* Lets me pass in any page in as a popup, it just needs to be modified to take in onClose as an argument */}
          {/* Like the about page: "const AboutPage = ({ onClose }) => {} "*/}
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
