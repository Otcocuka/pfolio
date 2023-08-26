import { motion, useScroll, useTransform } from "framer-motion";
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
      <motion.div style={{ x: y3 }} className="contact-links_text" id="text">
        Hello
      </motion.div>


      <motion.h1 whileInView={{ y:0,opacity: 1 }}
                  initial={{ opacity: 0, y:"1rem" }}
                  transition={{
                    duration: 0.05,
                    delay:0.01,
                  }}
                  viewport={{ once: false }} className="contact-links_heading">Let&apos;s talk</motion.h1>
      <a
        className="contact-links_link"
        ref={ref}
        href="https://t.me/YuiBooli4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button-primary">Telegram</button>
      </a>
    </div>
  );
}

export default ContactLinks;
