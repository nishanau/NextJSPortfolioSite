"use client";
import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Caladea } from "next/font/google";

const Button = ({ name, route }) => {
  let event = () => {};
  if (name === "Logout") {
    event = () => signOut();
  } else if (name === "Login") {
    event = () => signIn("google", {callbackUrl: "/"})
  }
  return (
    <div className="styles.container">
      <Link href={route} className={styles.button} onClick={event}>
        {name}
      </Link>
    </div>
  );
};

export default Button;
