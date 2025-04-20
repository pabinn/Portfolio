import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/pabbs.png")}
          alt="Pabin"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              I'm experienced in designing and developing responsive,
               performance-optimized websites that deliver great user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Designer</h3>
              <p>
              I have experience designing intuitive and user-centered digital products, 
              focusing on seamless user flows and impactful user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphics Designer</h3>
              <p>
                I have designed multiple promotional designs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
