import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container}>
      <div  className={styles.text}>
        <h2>
          <p>¡No dudes en contactar conmigo!</p>
        </h2>
      </div>
      <ul  className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:lorenzooltramarc@gmail.com">lorenzooltramarc@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/marc-lorenzo-i-oltra-94b0a0250/">linkedin.com/in/marc-lorenzo-i-oltra-94b0a0250/</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/marclorenzoo">github.com/marclorenzoo</a>
        </li>
      </ul>
    </footer>
  );
};