import React, { useEffect } from 'react'
import styles from './toast.module.css'

export const Toast = ({ message, onClose }) => {
    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => {
            onClose();
        }, 3000)
        return () => clearTimeout(timer);

    }, [message, onClose])
    return (
        <div className={`${styles.container} ${!message ? styles.hidden : ""}`} role="alert">
            {message}
        </div>
    )
}
export default Toast;