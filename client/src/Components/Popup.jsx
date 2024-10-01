import React from "react";

const Popup = ({ isOpen, onClose, component: Component }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Lets me pass in any page in as a popup, it just needs to be modified to take in onClose as an argument */}
        {/* Like the about page: "const AboutPage = ({ onClose }) => {} "*/}
        <Component onClose={onClose} />
        <button className="popup-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Popup;
