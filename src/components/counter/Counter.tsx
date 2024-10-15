import React from "react";
import styles from "./styles.module.css";

export default function Counter() {
  const data = [
    {
      count: 1124,
      text: "Registered Vacancies",
    },
    {
      count: 35,
      text: "Companies",
    },
    {
      count: 56841,
      text: "Current Resumes",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.count}>{item.count}</div>
              <div className={styles.text}>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
