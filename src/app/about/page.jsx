import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "About",
  description: "About Page",
};
export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // fill={true}
                    fill={true}
                    className={styles.img}
                    alt='image of person"s hand on a keyboard'
                />
                <div className={styles.imgText}>
                    <h2>
                        Patience, Consistency, Persistence.
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h1>About Me</h1>
                <p>I approach my work with patience, consistency, and persistence—qualities I believe are essential in the ever-evolving world of IT. Learning isn’t just something I do; it’s a constant mindset because technology never stands still. I’m driven by a genuine passion for solving problems and improving systems, whether through innovative tech solutions or smarter workflows. Grounded in curiosity and resilience, I’m dedicated to growing both personally and professionally while delivering meaningful impact in everything I undertake.</p>
                <Button route="/portfolio" name="Check Out My Work" />
            </div>
        </div>
    )
}

export default About