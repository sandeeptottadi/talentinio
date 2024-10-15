import React from "react";
import styles from "./styles.module.css";
import image1 from "../../Assets/blogs/image-1.jpg";
import image2 from "../../Assets/blogs/image-2.jpg";
import image3 from "../../Assets/blogs/image-3.jpg";

export default function Blogs() {
  interface Blog {
    image: string;
    date: string;
    title: string;
    description: string;
    author: string;
  }
  const blogs: Blog[] = [
    {
      image: image1,
      date: "12-Jan-2024",
      title: "Where to find right Jobs in India",
      description:
        "As Covid-19 situation worsens. How employers can do Bulk hiring Lorem Ipsum",
      author: "Author Name",
    },
    {
      image: image2,
      date: "12-Jan-2024",
      title: "Where to find right Jobs in India",
      description:
        "As Covid-19 situation worsens. How employers can do Bulk hiring",
      author: "Author Name",
    },
    {
      image: image3,
      date: "12-Jan-2024",
      title: "Where to find right Jobs in India",
      description:
        "As Covid-19 situation worsens. How employers can do Bulk hiring",
      author: "Author Name",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Blogs</div>
      <div className={styles.sub_title}>
        Get to know about latest Market trends in recruitment
      </div>
      <div className={styles.blogs}>
        {blogs.map((blog, index) => {
          return (
            <div key={index} className={styles.blog}>
              <div className={styles.blog_img_container}>
                <img
                  className={styles.blog_img}
                  src={blog.image}
                  alt="blog_image"
                />
              </div>
              <div className={styles.blog_content}>
                <div className={styles.blog_date}>{blog.date}</div>
                <div
                  className={styles.blog_title}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {blog.title}
                </div>
                <div
                  className={styles.blog_description}
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {blog.description}
                </div>
                <div className={styles.row}>
                  <div className={styles.blog_author}>By {blog.author}</div>
                  <div>
                    <a href="#">Continue Reading</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <a className={styles.all_blogs_link} href="#">
        View All Blogs
      </a>
    </div>
  );
}
