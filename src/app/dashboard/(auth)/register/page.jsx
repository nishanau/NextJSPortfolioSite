"use client"
import React, { useState } from 'react'
import styles from './page.module.css'

import Button from '@/components/Button/Button'

import { useRouter } from 'next/navigation'

const Register = () => {
const [err, setErr] = useState(false)

  const router =useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          })
          
        });
        if(res.status === 409){

        }
        res.status ===201 && router.push("/dashboard/login?success=Accout has been created")
    }
    catch (error) {
      console.log(error.message)
      setErr(true);

    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='username' className={styles.input} required />
        <input type='text' placeholder='email' className={styles.input} required />
        <input type='password' placeholder='password' className={styles.input} required />
        <button className={styles.button}>Register</button>

      </form>
      {err && `Error`}
      <Button route="/dashboard/login" name="Login with Existing Account" /> </div>
  )
}

export default Register
