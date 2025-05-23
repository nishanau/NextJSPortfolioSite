import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // fill={true}
                    height={500}
                    width={1000}
                    className='img'
                    alt='image of person"s hand on a keyboard'
                />
                <div className={styles.imgText}>
                    <h1>
                        A guy that loves to learn.
                    </h1>
                </div>
            </div>
            <div className={styles.textContainer}>
                <h2>About Me</h2>
                <p>I'm a tech guy</p>
            </div>
        </div>
    )
}

export default About