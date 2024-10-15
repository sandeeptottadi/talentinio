import React, { useEffect } from "react";
import styles from "./styles.module.css";
import profile_picture from "../../Assets/testimonials/user-1.jpg";
import pattern from "../../Assets/testimonials/pattern.jpeg";

export default function Clients() {
  const testimonials = [
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis. Lorem Ipsum Mauris vel felis nec felis."',
      profile_picture: profile_picture,
    },
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis.",
      profile_picture: profile_picture,
    },
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis.",
      profile_picture: profile_picture,
    },
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis.",
      profile_picture: profile_picture,
    },
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis.",
      profile_picture: profile_picture,
    },
    {
      name: "John Doe",
      location: "India, Hyderabad",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies justo. Mauris vel felis nec felis.",
      profile_picture: profile_picture,
    },
  ];

  const [currSlide, setCurrentSlide] = React.useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      slide(currSlide < Math.ceil(testimonials.length / 2) ? currSlide + 1 : 1);
    }, 5000);

    return () => clearInterval(intervalId);
  });

  function slide(n: number) {
    document
      .querySelectorAll("." + styles.testimonial)
      .forEach((testimonial) => {
        (testimonial as HTMLElement).style.transform = `translateX(calc(-${
          2 * (n - 1)
        }00% - ${(n - 1) * 60}px)`;
      });
    setCurrentSlide(n);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Testimonials</div>
      <div className={styles.sub_title}>
        What Our <span className="text-[#F2960D]">C</span>lients{" "}
        <span className="text-[#F2960D]">S</span>ay
      </div>
      <img className={styles.pattern} alt="pattern" src={pattern} />
      <div className={styles.testimonials} id="testimonials">
        {testimonials.map((testimonial, index) => {
          return (
            <div className={styles.testimonial}>
              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.row}>
                  <img
                    src={testimonial.profile_picture}
                    alt="profile_picture"
                  />
                  <div className={styles.col}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.location}>
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="quote-icon flaticon-quote"></div>
                </div>
                <div
                  className={styles.description}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {testimonial.testimonial}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
