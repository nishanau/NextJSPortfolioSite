"use client";
import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const Button = ({ name, route, variant }) => {
  const router = useRouter();

  let event = () => {};
  if (name === "Logout") {
    event = () => signOut();
  }

  const buttonClass = clsx(
    styles.button,
    variant === "var2" ? styles.var2 : styles.var1,
    {
      [styles.logout]: name === "Logout",
      [styles.login]: name === "Login",
    }
  );
  return (
    <div className={styles.container}>
      <Link href={route} className={buttonClass} onClick={event}>
        {name}
      </Link>
    </div>
  );
};

export default Button;
