"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

import Button from "@/components/Button/Button";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const {showToast} = useToast();

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 409) {
        console.log(showToast("Username or email already taken","error"));
      }
      res.status === 201 &&
        router.push("/dashboard/login?success=Accout has been created");
        showToast("Account Created", "success")
    } catch (error) {
      showToast("Unknown error Occured.", "error")
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="Password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>

      <Button
        route="/dashboard/login"
        name="Login with existing account"
      />
    </div>
  );
};

export default Register;
