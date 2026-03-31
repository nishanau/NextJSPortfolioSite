import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nishan | DevOps, Cloud & Infrastructure Engineer",
  description: "Portfolio of Nishan - IT professional passionate about DevOps, cloud engineering, and infrastructure, working across diverse IT domains every day.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.titleWrapper}>
          <span className={styles.greeting}>Hey, I&apos;m</span>
          <h1 className={styles.title}>Nishan</h1>
          <h2 className={styles.subtitle}>DevOps · Cloud · Infrastructure · Automation</h2>
        </div>
        
        <p className={styles.description}>
          I&apos;m deeply passionate about IT and work across
          <span className={styles.highlight}> diverse IT domains</span> every day—from infrastructure and cloud administration to automation, security, and app development.
          That breadth has shaped my drive to grow into roles in
          <span className={styles.highlight}> DevOps</span>,
          <span className={styles.highlight}> Cloud Engineering</span>, and
          <span className={styles.highlight}> Infrastructure</span>—fields where I can operate across every layer of the stack and keep building, automating, and scaling.
        </p>
        
        <div className={styles.skills}>
          <span className={styles.skill}>AZ-104 Certified</span>
          <span className={styles.skill}>Azure / AWS</span>
          <span className={styles.skill}>Kubernetes</span>
          <span className={styles.skill}>Docker</span>
          <span className={styles.skill}>CI/CD</span>
          <span className={styles.skill}>Power Automate</span>
          <span className={styles.skill}>Terraform</span>
          <span className={styles.skill}>GitOps</span>
          <span className={styles.skill}>Linux</span>
        </div>
        
        <div className={styles.cta}>
          <Link href="/portfolio" className={styles.primaryButton}>
            Check Out My Projects
          </Link>
          <Link href="/about" className={styles.secondaryButton}>
            My Journey
          </Link>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            className={styles.img}
            alt="Nishan - DevOps, Cloud & Infrastructure Engineer"
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className={styles.decorativeShape}></div>
      </div>
    </div>
  );
}
