import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishabh Singh</h1>
        <p className={styles.description}>
          As a Full Stack Developer, I specialize in building scalable,
          end-to-end web applications. I thrive in both front-end and back-end
          development, crafting seamless user interfaces and efficient
          server-side solutions. My focus is on creating smooth,
          high-performance experiences, from database management to UI design.
          Reach out if you'd like to learn more.
        </p>
        <a href="mailto:rs1179379@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImg.png")}
        alt="Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
