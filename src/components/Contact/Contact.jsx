import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={`${styles.link} ${styles.email}`}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
            onClick={() =>
              window.open("mailto:farzanullah07@gmail.com", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
          <a href="mailto:farzanullah07@gmail.com">farzanullah07@gmail.com</a>
        </li>
        <li className={`${styles.link} ${styles.linkedin}`}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/farzanofme/", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
          <a href="https://www.linkedin.com/in/farzanofme/">linkedin/Farzan</a>
        </li>
        <li className={`${styles.link} ${styles.github}`}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
            onClick={() =>
              window.open("https://github.com/Farzan-Ullah", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
          <a href="https://github.com/Farzan-Ullah">github/Farzan</a>
        </li>
      </ul>
    </footer>
  );
};
