import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

const Works = (props) => {
  Works.defaultProps = {
    workID: "some random work",
    tags: ["design", "building", "motion", "direction"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in exercitationem perspiciatis laborum libero odit debitis, odio saepe facilis placeat obcaecati? Nulla possimus dolores ratione aliquam, quae ab quis aliquid?",
    img: "./dveri-i-dot.png",
    button_link: "#",
    styled: "default",
    styledImage1: "./Laura.webp",
    styledImage2: "./Laura.webp",
    backgroundText: "qweasdasdasdqweqwe",
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  //  work_frame hovering animation variable
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  // background text animation variable

  const text = document.getElementById("text");
  scroll((progress) => {
    if (text.readyState) {
      text.style.transform = `translatex(${progress}*1px)`;
    }
  });

  return (
    <>
      <div className="works">
        <motion.div style={{ x: y3 }} className="works_text" id="text">
          {props.backgroundText}
        </motion.div>
        <div className="work_card">
          <div className="work_header">
            <AnimatedTextWord class="works_name" text={props.workID} />
            <div className="work_tags">
              {props.tags.map((tag) => (
                <motion.div
                  whileInView={{ y: 0, opacity: 1 }}
                  initial={{ opacity: 1, y: "1rem" }}
                  transition={{
                    duration: 0.2,
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  key={tag.toString()}
                  className="tag"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="work_body">
            <AnimatedTextWord
              class="work_description"
              text={props.description}
            />
            <div className="work_button__demo">
              <a
                href={props.button_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button-primary">Try demo</button>
              </a>
            </div>
          </div>
        </div>
        {props.styled === "default" ? (
          <div className="work_frame ">
            <motion.div
              style={{
                y: y1,
                x: "-100%",
                backgroundImage: `url(${props.styledImage1})`,
              }}
              className="box1"
            ></motion.div>
            <motion.div
              style={{
                y: y2,
                x: "100%",
                backgroundImage: `url(${props.styledImage2})`,
              }}
              className="box2"
            ></motion.div>
            <img
              ref={ref}
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#"
            />
          </div>
        ) : props.styled === "style1" ? (
          <div className="work_frame ">
            <motion.div
              style={{
                y: y1,
                x: "-100%",
                backgroundImage: `url(${props.styledImage1})`,
              }}
              className="box2"
            ></motion.div>
            <img
              ref={ref}
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#"
            />
          </div>
        ) : props.styled === "reversed_default" ? (
          <div className="work_frame ">
            <motion.div
              style={{
                y: y2,
                x: "50%",
                backgroundImage: `url(${props.styledImage1})`,
              }}
              className="box1"
            ></motion.div>
            <motion.div
              style={{
                y: y1,
                x: "-100%",
                backgroundImage: `url(${props.styledImage2})`,
              }}
              className="box2"
            ></motion.div>
            <img
              ref={ref}
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#123"
            />
          </div>
        ) : props.styled === "no-style" ? (
          <div className="work_frame ">
            <img
              ref={ref}
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#22"
            />
          </div>
        ) : (
          <div>Component is corrupt</div>
        )}
      </div>
    </>
  );
};

export default Works;
