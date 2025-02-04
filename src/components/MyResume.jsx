import { motion } from "framer-motion";

const MyResume = () => {
  return (
    <>
      <div className="my_resume">
        <div className="resume_name">
          <h2>Damir Farziev</h2>
        </div>
        <div className="resume_position">
          <h2>Frontend Developer</h2>
        </div>

        <div className="resume_head">
          <a href="mailto:farzievdamir@gmail.com">farzievdamir@gmail.com</a>
          <a href="tel:+79032473745">+79032473745</a>
          <a href="https://t.me/YuiBooli4">Telegram</a>
          <a href="#name">Direct Message</a>
        </div>

        <div className="resume_body">
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: "1rem" }}
            transition={{
              duration: 0.05,
              delay: 0.01,
            }}
            viewport={{ once: false }}
          >
            Work experience
          </motion.h2>
          <div className="resume_block">
            <div className="resume_block_head">
              <div className="resume_block__company">Freelance</div>
              <div className="resume_block__position">Frontend-Developer</div>
              <div className="resume_block__date">Mar 2023 - Present</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Creating visually appealing and functional user interfaces,
                translating design mockups and wireframes into interactive web
                experiences.
              </li>
            </ul>
          </div>
          <div className="resume_block">
            <div className="resume_block_head">
              <div className="resume_block__company">Boomerang-partners</div>
              <div className="resume_block__position">Content-manager</div>
              <div className="resume_block__date">Aug 2022 - Mar 2023</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Developed responsive web apps for 7 online casinos using React.js and Vue.js
              </li>
              <li className="resume_block__achievements">
                Optimized content management within ComfortableMexicanSofa CMS, Strapi, and custom-built CMS
              </li>
              <li className="resume_block__achievements">
                Improved PWA performance, reducing load times and increasing user engagement
              </li>
            </ul>
          </div>
          <div className="resume_block">
            <div className="resume_block_head">
              <div className="resume_block__company">
                LLC &quot;Woodtechretail&quot;
              </div>
              <div className="resume_block__position">
                Frontend-Developer
              </div>
              <div className="resume_block__date">Jan 2022 - Dec 2023</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Developed responsive websites using Bootstrap, PHP, Vanilla JS, and jQuery, ensuring cross-browser compatibility
              </li>
              <li className="resume_block__achievements">
                Participated in the migration from OpenCart 2.xx to 3.xx, optimizing CMS content and improving website performance
              </li>
              <li className="resume_block__achievements">
                Integrated the inventory management system
                &quot;MoySklad&quot;
              </li>
            </ul>
          </div>
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: "1rem" }}
            transition={{
              duration: 0.05,
              delay: 0.01,
            }}
            viewport={{ once: false }}
          >
            Education
          </motion.h2>
          <div className="resume_block">
            <div className="resume_block_head">
              <div className="resume_block__company">
                Russian State Social University
              </div>
              <div className="resume_block__position">
                Bachelor of Engineering (B.E.) - Information Systems and
                Technologies
              </div>
              <div className="resume_block__date">Sep 2019 - Sep 2023 </div>
            </div>
          </div>
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ opacity: 0, y: "1rem" }}
            transition={{
              duration: 0.05,
              delay: 0.01,
            }}
            viewport={{ once: false }}
          >
            Skills
          </motion.h2>
          <div className="resume_block">
            Html, Css, Js, React, Typescript, NextJS, Tailwind, Redux, RTK,
            MobX, Unit testing
          </div>
        </div>
      </div>
    </>
  );
};

export default MyResume;
