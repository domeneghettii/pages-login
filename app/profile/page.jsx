import React from 'react';
import './profile.css';
import './login.css';
import './cadastro.css';

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <h2>Sobre Mim</h2>
                <p><strong>Nome:</strong> Luana Domeneghetti</p>
                <p><strong>Turma:</strong> 2TDS1</p>
                <p><strong>Gostos:</strong> Fazer minha faculdade de med-vet dos sonhos.</p>
            </div>
        </div>
    );
}