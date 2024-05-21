import React from "react";

import styles from "./CertificateCard.module.css";
import { getImageUrl } from "../../utils";

export const CertificateCard = ({ certificate: { title, view } }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        <a
          href={view}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
};
