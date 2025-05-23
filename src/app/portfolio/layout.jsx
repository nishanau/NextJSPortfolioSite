import React from "react";
import styles from "./page.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.mainTitle}>My Works</h1>

      {children}
    </div>
  );
};

export default Layout;
