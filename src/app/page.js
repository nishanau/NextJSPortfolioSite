import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Nishan | Full-Stack Developer",
  description: "Portfolio of Nishan - Full-Stack Developer specializing in modern web technologies, DevOps, and UI/UX design",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.titleWrapper}>
          <span className={styles.greeting}>Hello, I&apos;m</span>
          <h1 className={styles.title}>Nishan</h1>
          <h2 className={styles.subtitle}>Full-Stack Developer</h2>
        </div>
        
        <p className={styles.description}>
          I build modern web applications with a focus on <span className={styles.highlight}>clean code</span>, 
          <span className={styles.highlight}> DevOps excellence</span>, and 
          <span className={styles.highlight}> intuitive UI/UX</span>.
        </p>
        
        <div className={styles.skills}>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>Next.js</span>
          <span className={styles.skill}>DevOps</span>
          <span className={styles.skill}>Docker</span>
          <span className={styles.skill}>Kubernetes</span>
          <span className={styles.skill}>UI/UX</span>
        </div>
        
        <div className={styles.cta}>
          
          <Link href="/portfolio" className={styles.primaryButton}>
            View My Work
          </Link>
          <Link href="/about" className={styles.secondaryButton}>
            About Me
          </Link>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            className={styles.img}
            alt="Nishan - Full-Stack Developer"
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
