"use client"

import styles from "../../styles/Signin.module.css";
import { useState } from "react";


export default function Home() {

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>Login In</h1>
                <p class="text-sm text-center mb-10">Don't have an account? <a href="https://www.seedprod.com">Get SeedProd Now</a></p>
            </div>
            <div className={styles.email}>
                <p>Email Address:</p>
                <input type="text" id="taskInput" placeholder="Digite seu email" ></input>
            </div>
            <div className={styles.password}>
                <p>Password:</p>
                <input type="text" id="taskInput" placeholder="Digite sua senha"></input>
            </div>
            <div className={styles.logincontainer}>
            <button className={styles.loginbutton}>Log In</button>
                <a href="#" className="information"><a href="/password">Forgot Password?</a></a>
            </div>
            <div className={styles.footer}>
            <h4>Copyright © 2025 By <a href="/conteudo">Luana Domeneghetti</a></h4>
            </div>
        </div>
    );
}