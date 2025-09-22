"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
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
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Nishan
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`${styles.link} ${
              pathname === link.url || (link.url !== '/' && pathname.startsWith(link.url)) 
                ? styles.active 
                : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
