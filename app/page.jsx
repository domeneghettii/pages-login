
export default function Home() {
    return (

        <div class="container">
            <h1>Welcome!</h1>
            <h2>Login</h2>
            <p class="text-sm text-center mb-10">Don't have an account? <a href="https://www.seedprod.com">Get SeedProd Now</a></p>

            <div className="card-login">
            <h3>Cadastra-se</h3>
            <input type="text" id="taskInput" placeholder='Username'/>
            <input type="password" id="taskInput" placeholder='Password'/>
            <input type="password" id="taskInput" placeholder='Confirm Password'/>
            <button onclick="addTask()">Cadastrar</button>

            <h3>Login</h3>
            <input type="text" id="taskInput" placeholder='Username'/> 
            <input type="password" id="taskInput" placeholder='Password'/>
            <button onclick="addTask()">Login</button> 
            </div>

            <div class="icon">
            <a href="https://www.instagram.com"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"/></a>
            <a href="https://www.twitter.com"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/></a>
            <a href="https://www.linkedin.com"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/></a>

                
                </div>
        </div>
    )
}

