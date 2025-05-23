import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> 2025 Nishan. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icons} width={20} height={20} alt='facebook account logo' />
        <Image src="/2.png" className={styles.icons} width={20} height={20} alt='LinkedIn account logo' />
        <Image src="/3.png" className={styles.icons} width={20} height={20} alt='facebook account logo' />
        <Image src="/4.png" className={styles.icons} width={20} height={20} alt='facebook account logo' /></div>
    </div>
  )
}

export default Footer
