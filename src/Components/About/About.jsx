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
            <div>
              <h3>Full Stack Developer</h3>
              <p>
                I’m a Full Stack Developer with a passion for building scalable,
                high-performance web applications.I specialize in developing
                both the front-end and back-end, seamlessly integrating the two
                to create robust, dynamic user experiences.I focus on delivering
                end-to-end solutions that are responsive, secure, and optimized
                for performance. Whether it's working with databases, APIs, or
                deploying applications, I thrive on taking projects from concept
                to completion.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
