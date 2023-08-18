import React, { useRef } from "react";
import { motion, progress, useScroll, useTransform } from "framer-motion";


const Works = (props) => {

 
 Works.defaultProps = {
    workID:'some random work',
    tags:['design','building','motion','direction'],
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in exercitationem perspiciatis laborum libero odit debitis, odio saepe facilis placeat obcaecati? Nulla possimus dolores ratione aliquam, quae ab quis aliquid?', 
    img: './dveri-i-dot.png',
    button_link: '#',
    styled: "default",
    styledImage1: "./Laura.jpg",
    styledImage2: "./Laura.jpg",
 }
  
 const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  

  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);



  const text = document.getElementById('text')
  scroll((progress)=>{
    if (text.readyState){
      text.style.transform =  `translatex(${progress}*1px)` ;
    }
  })

  return (
    <>
      <div className="works">
       
        <motion.div style={{ x: y3 }} className="works_text" id="text">asdasdasdasd</motion.div>
        <div className="work_card" ref={ref}>
          <div className="work_header">
            <h2 className="works_name">{props.workID}</h2>
            <div className="work_tags">{props.tags.map((tag)=>
              <span key={tag.toString()} className='tag'>{tag}</span>
            )}</div>
          </div>
          <div className="work_body">
            <div className="work_description">{props.description}</div>
            <div className="work_button__demo">
              <a href={props.button_link} target="_blank" rel="noopener noreferrer">
              <button className="button-primary" >Try demo</button>
              </a>
            </div>
          </div>
        </div>
        {props.styled === "default" ? (
          <div className="work_frame ">
            <motion.div style={{ y: y1, x: "-100%", backgroundImage: `url(${props.styledImage1})` }} className="box1">
             
              
            </motion.div>
            <motion.div
              style={{ y: y2, x: "100%" , backgroundImage: `url(${props.styledImage2})`}}
              className="box2"
            ></motion.div>
            <img
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#"
            />
          </div>
        ) : props.styled === "style1" ? (
          <div className="work_frame ">
            <motion.div style={{ y: y1, x: "-100%" , backgroundImage: `url(${props.styledImage1})`}} className="box2">
              
            </motion.div>
            <img
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#"
            />
          </div>
        ) : props.styled === "reversed_default" ? (
          <div className="work_frame ">
            <motion.div style={{ y: y2, x: "50%" , backgroundImage: `url(${props.styledImage1})`}} className="box1">
          
              
            </motion.div>
            <motion.div
              style={{ y: y1, x: "-100%", backgroundImage: `url(${props.styledImage2})` }}
              className="box2"
            ></motion.div>
            <img
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#123"
            />
          </div>
        ):props.styled === "no-style" ? (
          <div className="work_frame ">
            
            <img
              className="work_frame__image"
              loading="lazy"
              src={props.img}
              alt="#22"
            />
          </div>
        ):
        (
          <div>succ1</div>
        )
      }

     
      </div>
    </>
  );
}

export default Works;