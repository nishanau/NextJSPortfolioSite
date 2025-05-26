"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  }
];
const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {session ? session.user.name.split(" ")[0] : "Nishan"}
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              pathname === link.url ? styles.active : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
        <div className={styles.logInOutButtonContainer}>
          {status === "loading" ? (
            <Button name="Login" route="/dashboard/login" />
          ) : session ? (
            <Button name="Logout" route="" />
          ) : (
            <Button name="Login" route="/dashboard/login" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
