import React from "react";
import styles from "./styles.module.css";
import item1_image1 from "../../Assets/home/Item1/image1.png";
import item1_image2 from "../../Assets/home/Item1/image2.png";
import item1_image3 from "../../Assets/home/Item1/image3.jpg";

import item2_image1 from "../../Assets/home/Item2/image1.jpg";
import item2_image2 from "../../Assets/home/Item2/image2.jpg";
import item2_image3 from "../../Assets/home/Item2/image3.jpg";

import item3_image1 from "../../Assets/home/Item3/image1.jpg";
import item3_image2 from "../../Assets/home/Item3/image2.jpg";
import item3_image3 from "../../Assets/home/Item3/image3.jpg";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import left_arrow from "../../Assets/left_arrow.svg";
import right_arrow from "../../Assets/right_arrow.svg";

interface Item {
  title: string;
  sub_title: string;
  anchor_text: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
}

export default function Home() {
  const items: Item[] = [
    {
      title: "Save 50-60% of your Hiring Time",
      sub_title:
        "Technical screened Resumes for Employers & Screened jobs for Candidates",
      anchor_text: "Call 1800 572 7796 (Toll Free)  to book free demo",
      images: {
        image1: item1_image1,
        image2: item1_image2,
        image3: item1_image3,
      },
    },
    {
      title: "Simple, Yet Robust Application Tracking System ",
      sub_title:
        "Application Tracking system with option to enhance candidate experience, ability to build quality database for future use & Funnel Metric Driven Reporting system.",
      anchor_text: "Call 1800 572 7796 (Toll Free)  to book free demo",
      images: {
        image1: item2_image1,
        image2: item2_image2,
        image3: item2_image3,
      },
    },
    {
      title: "Right place to find Right Career",
      sub_title: "Jobs listed here are the exact match to your profile",
      anchor_text: "Call 1800 572 7796 (Toll Free)  to book free demo",
      images: {
        image1: item3_image1,
        image2: item3_image2,
        image3: item3_image3,
      },
    },
  ];
  return (
    <div
      style={{ minHeight: "calc(100vh + 90px)" }}
      className={`bg-[#2C2F38] ${styles.container}`}
    >
      <Carousel
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
        className={styles.carousel}
        NextIcon={<img src={right_arrow} />}
        PrevIcon={<img src={left_arrow} />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ item }: { item: Item }) {
  return (
    <Paper className={styles.card}>
      <div className={styles.content_container}>
        <h2 className="text-white">{item.title}</h2>
        <p className=" text-white">{item.sub_title}</p>
        <a href="tel:18005727796" className="CheckButton">
          {item.anchor_text}
        </a>
      </div>
      <div className={styles.images}>
        <div className={styles.images_container}>
          <img src={item.images.image1} alt="image1" />
          <img src={item.images.image2} alt="image2" />
          <img src={item.images.image3} alt="image3" />
        </div>
      </div>
    </Paper>
  );
}
