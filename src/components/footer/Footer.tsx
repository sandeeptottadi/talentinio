import React from "react";
import styles from "./styles.module.css";
import logo from "../../Assets/header/talentiniologo.png";
import pattern_img from "../../Assets/footer/dotted-pattern.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer_section_container}>
        <img className={styles.pattern_img_1} src={pattern_img}></img>
        <img className={styles.pattern_img_2} src={pattern_img}></img>
        <div className={styles.sections}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
            <div className={styles.heading}>Follow Us</div>
            <div className={styles.row}>
              <div className={styles.icon}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className={styles.icon}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className={styles.icon}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Quick Links</div>
            <div className={styles.row}>
              <div className={styles.col}>
                <a href="#" className={styles.link}>
                  Home
                </a>
                <a href="#" className={styles.link}>
                  Who We Are
                </a>
                <a href="#" className={styles.link}>
                  What We Do
                </a>
                <a href="#" className={styles.link}>
                  Companies
                </a>
              </div>
              <div className={styles.col}>
                <a href="#" className={styles.link}>
                  Contact
                </a>
                <a href="#" className={styles.link}>
                  Blog
                </a>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
                <a href="#" className={styles.link}>
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.heading}>Contact Us</div>
            <div className={styles.col}>
              <a href="#" className={styles.link}>
                24/7 Support
              </a>
              <a href="#" className={styles.link}>
                <span className="text-[#E4942C]">Phone</span>: +91 TOLLFREE
              </a>
              <a href="#" className={styles.link}>
                <span className="text-[#E4942C]">Email</span>:
                admin@talentinio.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrights_container}>
        © 2024 Talentinio All Rights Reserved
      </div>
    </div>
  );
}
