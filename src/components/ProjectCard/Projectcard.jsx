import React from "react";
import styles from "./projectcard.module.css"
import Button from "../Button/Button";
import Image from "next/image";

const Projectcard = ({ project }) => {
  const { title, description, image } = project;

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.paragraph}>{description}</p>
        <Button route="" name="See More" />
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={image} fill alt="CICD flow" />
      </div>
    </div>
  );
};

export default Projectcard;
