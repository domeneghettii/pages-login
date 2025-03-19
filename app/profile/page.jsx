"use client"

import styles from "../../styles/Profile.module.css";
import { useState } from "react";


export default function Profile() {

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
            <img src="/fotolulu.jpg" alt="minha foto" />
                <h1>Sobre mim</h1>
                <p>Sou Luana Domeneghetti, tenho 17 anos e, em breve, completarei 18 no dia 20 de junho. Moro em Campinas-SP e estou no terceiro ano do ensino médio, conciliando meus estudos com o curso técnico em Desenvolvimento de Sistemas no SENAI Valinhos. Sempre em busca de aprendizado, adoro desafios e novas oportunidades para crescer.</p>
                </div>
                <div className={styles.gostos}>
                <h1>Meus Gostos</h1>
                <p>Sou apaixonada por comida japonesa e adoro explorar novas receitas na cozinha, sempre experimentando coisas diferentes. Amo mergulhar em histórias de romance através dos livros e me perder em séries e filmes que capturam minha atenção. Além disso, estou determinada a seguir meu sonho: no próximo ano, quero estar na área de Medicina Veterinária, transformando meu amor pelos animais em profissão.</p>
                </div>
            <div className={styles.footer}>
                <h4>© 2025 Luana Domeneghetti</h4>
            </div>
            <div className={styles.info}>
                <p>Thank you for your attention and for visiting my website!<a href="/signin">To go back</a></p>
            </div>
        </div>
    );
}