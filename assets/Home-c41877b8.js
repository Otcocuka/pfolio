import{r as u,j as e}from"./index-2eb6ce6c.js";import{A as c,H as b}from"./AnimatedTextWord-1a3d9045.js";import{u as p,a as l}from"./use-scroll-c51b9511.js";import{m as i}from"./motion-0c17eb80.js";import{C as y}from"./ContactLinks-7f50a6f3.js";const a=t=>{a.defaultProps={workID:"some random work",tags:["design","building","motion","direction"],description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in exercitationem perspiciatis laborum libero odit debitis, odio saepe facilis placeat obcaecati? Nulla possimus dolores ratione aliquam, quae ab quis aliquid?",img:"./dveri-i-dot.png",button_link:"#",styled:"default",styledImage1:"./Laura.webp",styledImage2:"./Laura.webp",backgroundText:"qweasdasdasdqweqwe"};const n=u.useRef(null),{scrollYProgress:o}=p({target:n,offset:["start end","end start"]}),r=l(o,[0,1],["0","-50%"]),d=l(o,[0,1],["0%","-100%"]),g=l(o,[0,1],["0%","-5%"]),m=document.getElementById("text");return scroll(s=>{m.readyState&&(m.style.transform=`translatex(${s}*1px)`)}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"works",children:[e.jsx(i.div,{style:{x:g},className:"works_text",id:"text",children:t.backgroundText}),e.jsxs("div",{className:"work_card",children:[e.jsxs("div",{className:"work_header",children:[e.jsx(c,{class:"works_name",text:t.workID}),e.jsx("div",{className:"work_tags",children:t.tags.map(s=>e.jsx(i.div,{whileInView:{y:0,opacity:1},initial:{opacity:1,y:"1rem"},transition:{duration:.2,delay:.1},viewport:{once:!0},className:"tag",children:s},s.toString()))})]}),e.jsxs("div",{className:"work_body",children:[e.jsx(c,{class:"work_description",text:t.description}),e.jsx("div",{className:"work_button__demo",children:e.jsx("a",{href:t.button_link,target:"_blank",rel:"noopener noreferrer",children:e.jsx("button",{className:"button-primary",children:"Try demo"})})})]})]}),t.styled==="default"?e.jsxs("div",{className:"work_frame ",children:[e.jsx(i.div,{style:{y:r,x:"-100%",backgroundImage:`url(${t.styledImage1})`},className:"box1"}),e.jsx(i.div,{style:{y:d,x:"100%",backgroundImage:`url(${t.styledImage2})`},className:"box2"}),e.jsx("img",{ref:n,className:"work_frame__image",loading:"lazy",src:t.img,alt:"#"})]}):t.styled==="style1"?e.jsxs("div",{className:"work_frame ",children:[e.jsx(i.div,{style:{y:r,x:"-100%",backgroundImage:`url(${t.styledImage1})`},className:"box2"}),e.jsx("img",{ref:n,className:"work_frame__image",loading:"lazy",src:t.img,alt:"#"})]}):t.styled==="reversed_default"?e.jsxs("div",{className:"work_frame ",children:[e.jsx(i.div,{style:{y:d,x:"50%",backgroundImage:`url(${t.styledImage1})`},className:"box1"}),e.jsx(i.div,{style:{y:r,x:"-100%",backgroundImage:`url(${t.styledImage2})`},className:"box2"}),e.jsx("img",{ref:n,className:"work_frame__image",loading:"lazy",src:t.img,alt:"#123"})]}):t.styled==="no-style"?e.jsx("div",{className:"work_frame ",children:e.jsx("img",{ref:n,className:"work_frame__image",loading:"lazy",src:t.img,alt:"#22"})}):e.jsx("div",{children:"Component is corrupt"})]})})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{data:"I craft digital experiences for humans",backgroundText:"2023"}),e.jsx(a,{workID:"Dovita Bridal Canada",tags:["development"],description:"Dovita Bridal is an exclusive bridal boutique, serving in Canada with their wide variety of inspiring wedding and evening dress collections.",img:"./dovita-i.webp",button_link:"https://dovitabridalcanada.com/",styled:"default",styledImage1:"./Laura.webp",styledImage2:"./Romana.jpeg",backgroundText:"Dovita Bridal Canada"}),e.jsx(a,{workID:"0x Bet Casino",tags:["maintenance","innovation","management","design","SEO"],description:`Introducing the New Arrival of 2022!\r
        Experience modern and functional crypto-gaming with a minimalist design and user-friendly interface. Our cutting-edge product offers bonuses, round-the-clock support, cashback, and, most importantly, top-notch security. It's a product that aligns with the times, providing players with exactly what they need.`,img:"./0x.webp",button_link:"https://0x.bet/",styled:"default",styledImage1:"./0x3.webp",styledImage2:"./0x1-1.webp",backgroundText:"0x.bet"}),e.jsx(a,{workID:"Beti Bet Bookmaker",tags:["maintenance","innovation","management","design","SEO"],description:"An innovative fusion of online gaming and sports betting platform! The sleek and minimalist interface allows players to focus on the essence of the game, immersing themselves in the excitement of bets and gameplay.",img:"./betibet.webp",button_link:"https://betibet.com/",styled:"reversed_default",styledImage1:"./betibet2.webp",styledImage2:"./betibet1.webp",backgroundText:"Betibet.com"}),e.jsx(a,{workID:"Beti Bet Casino",tags:["maintenance","innovation","management","design","SEO"],description:"Introducing a groundbreaking product that seamlessly combines online gaming with a sports betting platform! With its sleek and minimalist interface, players can immerse themselves in the essence of the game, allowing for an immersive experience that heightens the thrill of both bets and gameplay.",img:"./play-betibet.webp",button_link:"https://play.betibet.com/",styled:"reversed_default",styledImage1:"./play-betibet-2.webp",styledImage2:"./play-betibet-1.webp",backgroundText:"Play.betibet.com"}),e.jsx(a,{workID:"Bingo Bonga Casino",tags:["maintenance","innovation","management","design","SEO"],description:"Online gaming has never been this enjoyable! Explore a multitude of captivating games, backed by round-the-clock support, fair and enjoyable gameplay, and fantastic bonuses – just a glimpse of what BingoBonga has to offer.",img:"./bingo.webp",button_link:"https://bingobonga.com/",styled:"style1",styledImage1:"./bingo-1.webp",backgroundText:"Bingobonga.com"}),e.jsx(a,{workID:"Jack Top Casino",tags:["maintenance","innovation","management","design","SEO"],description:"Welcome to JackTop Casino – the hottest addition of 2023! We've gone the extra mile to create a stylish and functional online gaming project, offering a vast selection of games, bonuses, and a user-friendly interface that enhances comfort and enjoyment during gameplay. Our unique character and design solutions promise an unparalleled gaming experience for your players. As a new player in the market, JackTop has already captured the attention of gamers and aims to become a top player in the industry.",img:"./jacktop.webp",button_link:"https://jacktop.com/",styled:"style1",styledImage1:"./jacktop-1.webp",styledImage2:"./jacktop-2.webp",backgroundText:"Jacktop.com"}),e.jsx(a,{workID:"Zota Bet Casino",tags:["maintenance","innovation","management","design","SEO"],description:"Especially tailored for our visitors from Australia! Introducing a product that seamlessly combines online gaming with a sports betting platform. With its stylish and user-friendly interface, players can fully immerse themselves in the game. Round-the-clock support, enticing bonuses, and a flood of emotions await at every turn!",img:"./zotabet.webp",button_link:"https://zotabet.com/",styled:"default",styledImage1:"./zotabet-1.webp",styledImage2:"./zotabet-2.webp",backgroundText:"Zotabet.com"}),e.jsx(a,{workID:"Polmetra",tags:["development","management","design"],description:"We present an online store featuring an extensive range of interior doors and flooring options from over 100 manufacturers. Our unique offering stems from direct partnerships with 40+ warehouses, ensuring swift delivery from our partners' facilities. Serving both corporate entities and individuals, we provide delivery through our fleet and third-party courier services across the Russian Federation. Explore ongoing promotions as part of our commitment to exceptional value.",img:"./polmetra.webp",button_link:"https://Polmetra.ru/",styled:"reversed_default",styledImage2:"./polmetra-2.webp",styledImage1:"./polmetra-1.webp",backgroundText:"Polmetra.ru"}),e.jsx(a,{workID:"Двери и Точка",tags:["development","management","design"],description:"Precisely streamlined deliveries, a high level of customer service, meticulous assortment curation, and competitive pricing – these and many other distinctive features characterize our approach to business, enabling us to secure leading positions in the doors and flooring market. We have the ability to individually tailor various solution options to address your specific needs.",img:"./dveri-i-dot.webp",button_link:"https://dveri-i.ru/",styled:"default",styledImage1:"./dveri-i-dot-1.webp",styledImage2:"./dveri-i-dot-2.webp",backgroundText:"Двери и точка"}),e.jsx(a,{workID:"Eccmarket",tags:["project managing","development","content management"],description:"EccMarket - Engineering Consulting Center. A New Industrial Standard on Your Desk.",img:"./eccmarket.webp",button_link:"https://www.eccmarket.ru/",styled:"default",styledImage1:"./eccmarket-1.webp",styledImage2:"./eccmarket-2.webp",backgroundText:"Uber777.Moscow.ru"}),e.jsx(a,{workID:"Lunch-Time",tags:["project managing","development","content management"],description:"With a track record dating back to 1999, we specialize in the field of meal delivery and catering. We have perfected a model service for delivering hot meals to offices, as well as providing delicious and satisfying food for tour groups and catering events.",img:"./lunchtime.webp",button_link:"",styled:"reversed_default",styledImage1:"./lunchtime-1.webp",styledImage2:"./lunchtime-2.webp",backgroundText:"Uber777.Moscow.ru"}),e.jsx(a,{workID:"Uber777 Moscow",tags:["development","design"],description:"My first significant project. It all started here",img:"./uber.webp",button_link:"",styled:"reversed_default",styledImage2:"./uber-1.webp",styledImage1:"./uber-2.webp",backgroundText:"Uber777.Moscow.ru"}),e.jsx(a,{workID:"Sanri",tags:["development"],description:"Reviving a vintage full-service advertising agency website founded in 1995. Paying homage to the times when table-based layout was the norm and not a shame.",img:"./sanri.webp",button_link:"",styled:"style1",styledImage1:"./sanri-1.webp",styledImage2:"./betibet1.webp",backgroundText:"Sanri.ru"}),e.jsx(a,{workID:"Known",tags:["development"],description:"did it long time ago",img:"./known.webp",button_link:"https://otcocuka.github.io/Template/",styled:"default",styledImage1:"./known-1.webp",styledImage2:"./known-2.webp",backgroundText:"Known.sg"}),e.jsx(y,{})]});export{v as default};