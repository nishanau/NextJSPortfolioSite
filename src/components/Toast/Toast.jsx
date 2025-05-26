import React, { useEffect } from "react";
import styles from "./toast.module.css";

export const Toast = ({ message, onClose, type }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

    const bgColors = {
    success: "green",
    error: "red",
    info: "blue",
    warning: "yellow",
  };

  return (
    <div
      className={`${styles.container}  ${!message ? styles.hidden : ""}`}
      style={{backgroundColor: bgColors[type] || "gray",}}
      role="alert"
    >
      {message}
    </div>
  );
};
export default Toast;
