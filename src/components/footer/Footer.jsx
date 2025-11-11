import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> 2025 Nishan. All rights reserved</div>
      <div className={styles.social}>
        <a href="https://linkedin.com/in/nishan-shrestha-930a8a24a" target="_blank" rel="noopener noreferrer">
          <Image src="/LinkedIn_logo.png" className={styles.icons} width={20} height={20} alt='LinkedIn account logo' />
        </a>
      </div>
    </div>
  )
}

export default Footer
