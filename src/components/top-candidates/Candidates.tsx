import React from "react";
import styles from "./styles.module.css";
import profile_picture from "../../Assets/candidates/default.png";

export default function Candidates() {
  interface Candidate {
    profile_picture: string;
    name: string;
    title: string;
  }
  const candidates: Candidate[] = [
    {
      profile_picture: profile_picture,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      profile_picture: profile_picture,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      profile_picture: profile_picture,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      profile_picture: profile_picture,
      name: "John Doe",
      title: "Software Engineer",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Top Candidates</h2>
      <div className={styles.candidates}>
        {candidates.map((candidate, index) => {
          return (
            <div key={index} className={styles.candidate}>
              <div className={styles.candidate_img_container}>
                <img
                  className={styles.candidate_img}
                  src={candidate.profile_picture}
                  alt="profile_picture"
                />
              </div>
              <h3>{candidate.name}</h3>
              <p>{candidate.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
