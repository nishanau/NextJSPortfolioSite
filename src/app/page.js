import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nishan | DevOps & Infrastructure Engineer",
  description: "Portfolio of Nishan - DevOps & Infrastructure Engineer specializing in cloud platforms, CI/CD, automation, and scalable infrastructure",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.titleWrapper}>
          <span className={styles.greeting}>Hello, I&apos;m</span>
          <h1 className={styles.title}>Nishan</h1>
          <h2 className={styles.subtitle}>DevOps & Infrastructure Engineer</h2>
        </div>
        
        <p className={styles.description}>
          I design and build scalable cloud infrastructure with expertise in <span className={styles.highlight}>automation</span>, 
          <span className={styles.highlight}> containerization</span>, and 
          <span className={styles.highlight}> CI/CD pipelines</span>. Passionate about creating reliable, secure, and efficient systems.
        </p>
        
        <div className={styles.skills}>
          <span className={styles.skill}>AWS/Azure</span>
          <span className={styles.skill}>Kubernetes</span>
          <span className={styles.skill}>Docker</span>
          <span className={styles.skill}>Terraform</span>
          <span className={styles.skill}>Jenkins/GitLab CI</span>
          <span className={styles.skill}>Monitoring</span>
        </div>
        
        <div className={styles.cta}>
          
          <Link href="/portfolio" className={styles.primaryButton}>
            View My Projects
          </Link>
          <Link href="/about" className={styles.secondaryButton}>
            My Experience
          </Link>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            className={styles.img}
            alt="Nishan - DevOps & Infrastructure Engineer"
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
