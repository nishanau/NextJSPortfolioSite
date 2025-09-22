"use client";
import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import clsx from "clsx";

const Button = ({ name, route, variant }) => {
  const buttonClass = clsx(
    styles.button,
    variant === "var2" ? styles.var2 : styles.var1
  );
  
  return (
    <div className={styles.container}>
      <Link href={route} className={buttonClass}>
        {name}
      </Link>
    </div>
  );
};


export default Button;
