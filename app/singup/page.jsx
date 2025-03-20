"use client"

import styles from "../../styles/Signup.module.css";
import { useState } from "react";

export default function Signup() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1> Sign Up</h1>
                <p>Have an account? <a href="/signin">Log In</a></p>
                <div className={styles. email}>
                    <p>Email Address:</p>
                    <input type="text" id="taskInput" placeholder="Digite um email"></input>
                </div>
                <div className={styles.password}>
                    <p>Password:</p>
                    <input type="text" id="taskInput" placeholder="Crie uma senha"></input>
                </div>
                <div className={styles.logincontainer}>
                    <button className={styles.loginbutton}>Sign Up</button>
                    <a href="/password" className="information">Forgot your password?</a>  
                </div>
                <div className={styles.footer}>
                <h4>Copyright © 2025 By <a href="/profile">Luana Domeneghetti</a></h4>
                </div>
            </div>
        </div>
    );
}