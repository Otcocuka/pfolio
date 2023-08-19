
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero({data = "Hi there! I'm  Damir Farziev"}) {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="hero">
      <motion.div style={{ x: y3 }} className="hero_text" id="text">2023</motion.div>
        <h1 className="hero_heading" ref={ref}>{data}</h1>
    </div>
  )
}

export default Hero