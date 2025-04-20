import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pabin</h1>
        <p className={styles.description}>
          I'm a Graphics & UI/UX Designer with 3 years of experience crafting intuitive user interfaces and
          engaging visual designs.
        </p>
        <a href="mailto:pabinpoudel412@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("about/pabbs.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
