import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer">
      <motion.div
        style={{
          width: 20000,
          height: 100,
        //   borderRadius: 30,
          backgroundColor: "#fff",
          cursor: "grab",
        }}
        drag
        dragConstraints={{
          top: -125,
          right: 125,
          bottom: 125,
          left: -125,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
      />
    </div>
  );
};

export default Footer;
