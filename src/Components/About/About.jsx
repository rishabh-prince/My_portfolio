import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="about img"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer.I specialize
                in creating dynamic and user-centric web applications.I excel
                in translating design concepts into responsive, visually
                appealing interfaces and thrive on optimizing user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
