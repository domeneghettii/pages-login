import React from 'react';
import '../login';
import '../profile';

export default function Login() {
    return (

        <div class="login">
            <h1>Welcome!</h1>
            <h2>Login</h2>
            <p class="text-sm text-center mb-10">Don't have an account? <a href="https://www.seedprod.com">Get SeedProd Now</a></p>

            <h3>Login</h3>  
            <input type="text" id="taskInput" placeholder='Username'/>
            <input type="password" id="taskInput" placeholder='Password'/>
            <button onclick="addTask()">Login</button>

            <nav>
                <a href="/login">Ir para Login</a>
                <a href="/profile">Ir para Profile</a>
            </nav>

            <div class="icon">
            <a href="https://www.instagram.com"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"/></a>
            <a href="https://www.twitter.com"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/></a>
            <a href="https://www.linkedin.com"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>          
            </div>
        </div>

            
    )
}  