
import { motion, progress, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ContactLinks() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);


    return (
      <div className="contact-links">
        <motion.div style={{ x: y3 }} className="contact-links_text" id="text">Hello</motion.div>
          <h1 className="contact-links_heading">Let's talk</h1>
          <a className="contact-links_link" ref={ref}  href="https://t.me/YuiBooli4" target="_blank" rel="noopener noreferrer"><button className="button-primary">telegram</button></a>
      </div>
    )
  }
  
  export default ContactLinks