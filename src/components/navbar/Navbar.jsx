"use client";
import Link from "next/link";
import React, { use, useEffect } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useToast } from "@/context/ToastContext";
import { useRouter, useSearchParams } from "next/navigation";
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
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 7,
    title: "Login",
    url: "/dashboard/login",
  },
  {
    id: 8,
    title: "Register",
    url: "/dashboard/register",
  },
  {
    id: 8,
    title: "Logout",
    url: "/dashboard/register",
  },



];
const Navbar = () => {

  const { data: session } = useSession();
  const pathname = usePathname();




  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {session ? session.user.name.split(" ")[0] : "Nishan"}
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {
          session ? links.filter(link => link.title !== "Login" && link.title !== "Register")
            .map((link) => {
              if (link.title === "Logout") {
                return (
                  <Link
                    key={link.id}
                    href={link.url}
                    className={`${styles.link}`}
                    onClick={
                      async () => {
                        await signOut({ callbackUrl: "/?loggedOut=true" });
                      }
                    }
                  >
                    {link.title}
                  </Link>
                )
              }
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className={`${styles.link} ${pathname === link.url ? styles.active : ""
                    }`}
                >
                  {link.title}
                </Link>
              )

            })
            :
            links.filter(link => link.title !== "Logout")
              .map((link) => (<Link
                key={link.id}
                href={link.url}
                className={`${styles.link} ${pathname === link.url ? styles.active : ""
                  }`}
              >
                {link.title}
              </Link>))
        }


      </div>
    </div>
  );
};

export default Navbar;
