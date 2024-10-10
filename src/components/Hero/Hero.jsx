import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Hola! Soy Marc</h1>
        <p className={styles.description}>
          Desarrollador de Aplicaciones Web. 🌐 Soy un nuevo desarrolador de
          aplicaciones web, he trabajado con JavaScript, React, SQL, Python y
          más. ¡Contacta conmigo para saber más!
        </p>
        <a
          href="mailto:lorenzooltramarc@gmail.com"
          className={styles.contactBtn}
        >
          Contacto
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
