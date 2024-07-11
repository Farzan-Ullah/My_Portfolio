import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Farzan Ullah</h1>
        <p className={styles.description}>
          A Frontend Developer dedicated to improving skills through hands-on
          learning and development work. Using{" "}
          <b>ReactJs, HTML5, JavaScript </b> and other programming languages to
          produce clean code. 2+ Years of experience. Well-organized and
          collaborative team player with strong communication and analytical
          abilities.
        </p>
        <div className={styles.buttonGroup}>
          {/* <a
            href="mailto:farzanullah07@gmailcom"
            className={styles.contactBtn}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Contact Me
          </a> */}
          <a
            href={getImageUrl(
              "resume/Farzan Ullah - Software Developer - Resume_1_1.pdf"
            )}
            download="Farzan_Ullah_Resume.pdf"
            className={styles.resumeBtn}
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
