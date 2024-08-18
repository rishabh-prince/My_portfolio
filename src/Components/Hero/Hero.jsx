import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishabh Singh</h1>
        <p className={styles.description}>
          As a frontend developer, I specialize in creating dynamic and
          user-centric web applications.I excel in translating design concepts
          into responsive, visually appealing interfaces and thrive on
          optimizing user experiences. Reach out if you'd like to Know more.
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
