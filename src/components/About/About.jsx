import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me saying hi"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon" 
            />
            <div className={styles.aboutImageText}>
              <h3>Desarrollador Frontend</h3>
              <p>Desarrollador frontend versátil con dominio de HTML, CSS, JavaScript, React y WordPress. Creativo y apasionado por la tecnología.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server icon" 
            />
            <div className={styles.aboutImageText}>
              <h3>Desarrollador Backend</h3>
              <p>Experiencia en desarrollo backend con Python y PHP. Proyectos personales con gestión de APIs.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/UI.png")}
              alt="UI icon" 
            />
            <div className={styles.aboutImageText}>
              <h3>Diseño de Interfaz de Usuario</h3>
              <p>Diseñador UI con pasión por crear experiencias digitales memorables. Sólida experiencia.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
