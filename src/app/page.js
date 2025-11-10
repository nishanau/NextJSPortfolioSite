import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nishan | DevOps & Infrastructure Enthusiast",
  description: "Portfolio of Nishan - Aspiring DevOps engineer passionate about cloud infrastructure, automation, and continuous learning in the IT field",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.titleWrapper}>
          <span className={styles.greeting}>Hey, I&apos;m</span>
          <h1 className={styles.title}>Nishan</h1>
          <h2 className={styles.subtitle}>Aspiring DevOps Engineer</h2>
        </div>
        
        <p className={styles.description}>
          I&apos;m on a journey to master the world of DevOps and infrastructure. What started as curiosity about 
          <span className={styles.highlight}> how systems work</span> has turned into a genuine passion for 
          <span className={styles.highlight}> building</span>, 
          <span className={styles.highlight}> automating</span>, and 
          <span className={styles.highlight}> optimizing</span> infrastructure. I love getting my hands dirty with Kubernetes, 
          Docker, CI/CD pipelines, and cloud platforms—constantly learning, breaking things, and figuring out how to make them better.
        </p>
        
        <div className={styles.skills}>
          <span className={styles.skill}>AWS/Azure</span>
          <span className={styles.skill}>Kubernetes</span>
          <span className={styles.skill}>Docker</span>
          <span className={styles.skill}>Terraform</span>
          <span className={styles.skill}>CI/CD</span>
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
            alt="Nishan - Aspiring DevOps Engineer"
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
