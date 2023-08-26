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
              <div className="resume_block__company">
                Digital — integrator 5 CORNERS
              </div>
              <div className="resume_block__position">
                Junior Project Manager
              </div>
              <div className="resume_block__date">Apr 2023 - Present</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Project planning and coordination
              </li>
              <li className="resume_block__achievements">
                Effective communication
              </li>
              <li className="resume_block__achievements">
                Monitoring, reporting, and risk management
              </li>
              <li className="resume_block__achievements">
                Team leadership and results analysis
              </li>
            </ul>
          </div>
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
              <div className="resume_block__date">Aug 2022 - Feb 2023</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Managed and updated content across 7 online casinos, ensuring
                freshness and relevance of information.
              </li>
              <li className="resume_block__achievements">
                Collaborated with designers, generated technical briefs, and
                oversaw task execution.
              </li>
              <li className="resume_block__achievements">
                Monitored and coordinated work with SEO specialists, ensuring
                content optimization on websites.
              </li>
              <li className="resume_block__achievements">
                Conducted pre-launch localization testing, ensuring translation
                accuracy and quality.
              </li>
              <li className="resume_block__achievements">
                Conducted competitor analysis and market research, identifying
                opportunities for improvement and growth.
              </li>
              <li className="resume_block__achievements">
                Implemented innovations, including layout, integration (projects
                using React and various CMS platforms), and coordination with
                the platform-provider&apos;s development team.
              </li>
            </ul>
          </div>
          <div className="resume_block">
            <div className="resume_block_head">
              <div className="resume_block__company">
                LLC &quot;Woodtechretail&quot;
              </div>
              <div className="resume_block__position">
                Sales Manager, Frontend-Developer
              </div>
              <div className="resume_block__date">Jan 2022 - Jul 2022</div>
            </div>
            <ul className="resume_block_body">
              <li className="resume_block__achievements">
                Successful client support and deal closure
              </li>
              <li className="resume_block__achievements">
                Efficient selling of flooring coverings and doors
              </li>
              <li className="resume_block__achievements">
                Active promotion of products on trading platforms
              </li>
              <li className="resume_block__achievements">
                Professional layout and design of website pages
              </li>
              <li className="resume_block__achievements">
                Content optimization through the administrative panel
              </li>
              <li className="resume_block__achievements">
                Integration with the inventory management system
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
