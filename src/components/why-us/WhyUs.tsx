import React from "react";
import styles from "./styles.module.css";
import image from "../../Assets/why-us/choose.png";
import dotted_pattern_1 from "../../Assets/why-us/dotted-pattern-1.png";
import dotted_pattern_2 from "../../Assets/why-us/dotted-pattern-2.png";

export default function WhyUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Why Choose Us</div>
        <div className={styles.sub_title}>One Stop Recruitment Solutions</div>
        <div className={styles.description}>
          Database of Screened Candidates with the power to design brand-centric
          online experiences that drive candidate engagement and maximize
          conversion.
          <div>
            <button className={styles.know_more_btn}>Know More</button>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div className={styles.image_container}>
          <img className={styles.dotted_pattern_1} src={dotted_pattern_1} />
          <img className={styles.dotted_pattern_2} src={dotted_pattern_2} />
          <img className={styles.main_img} src={image} />
        </div>
      </div>
    </div>
  );
}
