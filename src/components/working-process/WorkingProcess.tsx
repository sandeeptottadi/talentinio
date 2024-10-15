import React from "react";
import styles from "./styles.module.css";
import bg from "../../Assets/work-process/white-bg.png";
import pattern from "../../Assets/work-process/dotted-pattern-1.png";

export default function WorkingProcess() {
  const process: string[] = [
    "Resume Sourcing",
    "Resume Screening",
    "Application Tracking System",
    "Report Analysis",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Our <span className=" text-[#F2960D]">W</span>orking{" "}
        <span className="text-[#F2960D]">P</span>rocess
      </div>
      <div className={styles.process}>
        <div className={styles.pattern}>
          <div className={styles.dark_ball}></div>
          <img src={pattern} alt="pattern" />
        </div>
        {process.map((step, index) => {
          return (
            <div key={index} className={styles.step}>
              <div className={styles.content}>
                <div className={styles.step_number}>{index + 1}</div>
                <div className={styles.step_text}>{step}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
