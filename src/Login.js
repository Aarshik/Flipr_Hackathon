import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    
    return (
        <div className='login'>
        
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>
                        E-mail
                    </h5>
                    <input type='text'
                   />
                    <h5>Password</h5>
                    <input type="password" 
                      
                    />
                    <button type="submit" 
                    className='login__signInButton'>
                        Sign In
                    </button>
                </form>
                <button className= "login__registerButton">
                    Phone Number 
                </button>
            </div>

        </div>
    )
}

export default Login
