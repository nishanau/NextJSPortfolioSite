import React from "react";
import styles from "./page.module.css";
import { Butterfly_Kids } from "next/font/google";
import Button from "@/components/Button/Button";
import Image from "next/image";
const  Category = async ({ params }) => {
  const {category} = await params;
  return (
    <div className={styles.container}>
      <h3>{ category} </h3>
      <div className={styles.item}>
        <div className={styles.itemContent}>
          <h1 className={styles.title}>Project Title</h1>
          <p className={styles.paragraph}>asdasfasdf asdfasdas</p>
          <Button route="" name="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          className={styles.img}
          src="/hero.png" 
          fill
          alt="project1" />
        </div>
      </div>
    </div>
  );
};

export default Category;
