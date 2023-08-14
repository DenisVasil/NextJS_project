import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Mountains from "public/mountains.jpg";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store", });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.imgContaier} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              // src={Mountains}
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />{" "}
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
