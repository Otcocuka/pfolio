import{r as n,j as t}from"./index-e2f25ec6.js";import{u as o,a as i}from"./use-scroll-7de48f62.js";import{m as s}from"./motion-0d20d9d4.js";function d(){const e=n.useRef(null),{scrollYProgress:r}=o({target:e,offset:["start end","end start"]}),a=i(r,[0,1],["0%","-20%"]);return t.jsxs("div",{className:"contact-links",children:[t.jsx(s.div,{style:{x:a},className:"contact-links_text",id:"text",children:"Hello"}),t.jsx(s.h1,{whileInView:{y:0,opacity:1},initial:{opacity:0,y:"1rem"},transition:{duration:.05,delay:.01},viewport:{once:!1},className:"contact-links_heading",children:"Let's talk"}),t.jsx("a",{className:"contact-links_link",ref:e,href:"https://t.me/YuiBooli4",target:"_blank",rel:"noopener noreferrer",children:t.jsx("button",{className:"button-primary",children:"Telegram"})})]})}export{d as C};
