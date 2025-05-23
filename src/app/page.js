import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Welcome to my Portfolio Site.  </h1>
        <p className={styles.description}>Explore my work and have fun!</p>
        <Button name="Let's Sail?" route="/portfolio" />
      </div>

      <div className={styles.imgcontiner}>
        <Image
          src="https://images.pexels.com/photos/158826/structure-light-led-movement-158826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
          className={styles.img}
          alt="Home Image" 
          width={700}
          height={500}
          />

      </div>
    </div>
  );
}
