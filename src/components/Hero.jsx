import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero(props) {
  Hero.defaultProps = {
    data: "Hi there! I'm  Damir Farziev",
    backgroundText: "2023",
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="hero">
      <motion.div style={{ x: y3 }} className="hero_text" id="text">
        {props.backgroundText}
      </motion.div>
      <h1 className="hero_heading" ref={ref}>
        {props.data}
      </h1>
    </div>
  );
}

export default Hero;
