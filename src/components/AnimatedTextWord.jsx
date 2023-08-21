import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = (props) => {

    


    
  const words = props.text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.01, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
        className={props.class}
      style={{  display: "flex", flexWrap:'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {words.map((word, index) => (
        <motion.div 
          variants={child}
          key={index}
          style={{  margin: "0 2px" }} // Добавлено для разделения слов
        >
          {word}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
