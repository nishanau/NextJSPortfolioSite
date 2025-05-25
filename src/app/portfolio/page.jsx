import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolios",
  description: "Nishan's Portfolio Site",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h3>Choose a gallery</h3>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryContainer}>
          <Link href="/portfolio/websites" className={styles.galleryItems}>
            <span className={styles.galleryTitle}>Websites</span>
          </Link>

          <Link
            href="/portfolio/devops-projects"
            className={styles.galleryItems}
          >
            <span className={styles.galleryTitle}>Devops Projects</span>
          </Link>

          <Link href="/portfolio/ui-ux-designs" className={styles.galleryItems}>
            <span className={styles.galleryTitle}>UI/UX Design</span>
          </Link>

          <Link href="/portfolio/automation" className={styles.galleryItems}>
            <span className={styles.galleryTitle}>Automation </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
