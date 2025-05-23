import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

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
                <p>I`m someone who believes in the power of patience, consistency, and persistence. Every day, I strive to learn and grow, knowing that progress comes through steady effort and dedication. You can’t be in IT without an innate desire to learn every day — it’s a field that constantly evolves, and curiosity is essential. I’m passionate about solving challenges and making things work better, whether it’s through technology or simply finding smarter ways to approach problems. I value curiosity and resilience, and I’m committed to growing both personally and professionally while making a positive impact in everything I do.</p>
                <Button route="/portfolio" name="Check Out My Work" />
            </div>
        </div>
    )
}

export default About