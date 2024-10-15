import React from "react";
import styles from "./styles.module.css";
import congitus_logo from "../../Assets/brands/cognitus_logo.png";
import infosys_logo from "../../Assets/brands/infosys_logo.png";
import light_house_logo from "../../Assets/brands/light_house_logo.png";
import nike_logo from "../../Assets/brands/nike_logo.png";
import salesforce_logo from "../../Assets/brands/salesforce_logo.png";
import talent_beacon_logo from "../../Assets/brands/talent_beacon_logo.png";
import { HorizontalTicker } from "react-infinite-ticker";

export default function Brands() {
  const companies: string[] = [
    congitus_logo,
    infosys_logo,
    light_house_logo,
    nike_logo,
    salesforce_logo,
    talent_beacon_logo,
  ];
  return (
    <div className={styles.container}>
      <h2>
        We Work With <span className="text-[#F2960D]">B</span>old{" "}
        <span className="text-[#F2960D]">B</span>rand That You Believe In.
      </h2>
      <div className={styles.companies}>
        <HorizontalTicker easing="ease-in" duration={25000}>
          {companies.map((company_logo, idx) => {
            return (
              <div
                className={styles.card}
                style={{ "--i": idx } as React.CSSProperties}
              >
                <img src={company_logo} alt="company logo" />
              </div>
            );
          })}
        </HorizontalTicker>
      </div>
    </div>
  );
}
