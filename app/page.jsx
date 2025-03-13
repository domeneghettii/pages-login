import React from 'react';

export default function Home() {
    return (
        <div className="container">
            <h1>Welcome!</h1>
            <h2>Login</h2>
            <p className="text-sm text-center mb-10">Don't have an account? <a href="/SignUp">Sign Up</a></p>

            <div className="card-login">
                <h3>Cadastra-se</h3>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm Password'/>
                <button onClick={() => alert('Register function not implemented')}>Cadastrar</button>

                <h3>Login</h3>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button onClick={() => alert('Login function not implemented')}>Login</button>
            </div>

            <div className="icon">
                <a href="https://www.instagram.com"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram"/></a>
                <a href="https://www.twitter.com"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter"/></a>
                <a href="https://www.linkedin.com"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn"/></a>
            </div>
        </div>
    );
}