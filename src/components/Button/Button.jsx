import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ name, route }) => {
  return (
    <div className="styles.container">
      <Link href={route} className={styles.button}>
        {name}
      </Link>
    </div>
  );
};

export default Button;
