import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="_blank" href="mailto:rs1179379@gmail.com">rs1179379@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/rishabh-singh-4511a7253/">
            https://www.linkedin.com/in/rishabh-singh-4511a7253/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/rishabh-prince">
            https://github.com/rishabh-prince
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.leetcode_img}
            src={getImageUrl("contact/LeetCode_image.png")}
            alt="LeetCode icon"
          />
          <a target="_blank" href="https://leetcode.com/u/rishabh_prince/">
            https://leetcode.com/u/rishabh_prince/
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
