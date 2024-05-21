import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Farzan Ullah</h1>
        <p className={styles.description}>
          {/* I'm a Software Developer with 3 years of experience using React and
          NodeJS. Reach out if you'd like to learn more! */}
          Frontend Developer dedicated to improving skills through hands-on
          learning and development work. Using <b>ReactJs, HTML5, JavaScrip </b>{" "}
          and other programming languages to produce clean code. Well-organized
          and collaborative team player with strong communication and analytical
          abilities.
        </p>
        <a href="mailto:farzanullah07@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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
