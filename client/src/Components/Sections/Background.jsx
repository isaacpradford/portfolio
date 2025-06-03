import React from "react";
import { motion } from "framer-motion";
import { useColor } from "../../functions/ColorContext";

const Background = () => {
  return (
    <motion.div className="b-background">
      {/* <section className="b-background__grid"></section> */}
      <section className="b-background__gradient"></section>
    </motion.div>
  );
};

export default Background;
