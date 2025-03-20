"use client"

import styles from "../../styles/Password.module.css";
import { useState } from "react";


export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.password}>
            </div>
        <h1>Reset Password</h1>
        <p>Enter your email address below to reset your account password.</p>
        <div className={styles.email}>
            <p>Email Address:</p>
            <input type="text" id="taskInput" placeholder="Digite seu email" ></input>
            </div>
            <div className={styles.logincontainer}>
            <button className={styles.loginbutton}>Reset Password</button>
            <div className={styles.footer}>
                <div className={styles.information}>
                <p><a href="/signin">Retorn to Login</a></p>
                <h4>Copyright © 2025 By <a href="/profile">Luana Domeneghetti</a></h4>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </div>
            </div>
            </div>
        </div>
        );
    }