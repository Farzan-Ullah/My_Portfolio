import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/mern1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites. Specialized in crafting intuitive user
                interfaces with React.js, ensuring a seamless user experience
                across devices.
              </p>
            </div>
            {/* <img src={getImageUrl("")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                "I'm a full stack MERN developer with a passion for building
                responsive and optimized web applications. I have experience in
                developing scalable backend services using Node.js and Express,
                integrating with MongoDB for robust data storage solutions. On
                the frontend, I specialize in crafting intuitive user interfaces
                with React.js, ensuring a seamless user experience across
                devices. I'm skilled in implementing RESTful APIs, managing
                state with Redux, and optimizing performance for high-traffic
                applications. With a strong foundation in both frontend and
                backend technologies, I thrive in creating dynamic and efficient
                solutions."
              </p>
            </div> */}
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end
                services and integrate APIs
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
