import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div className='login-back'>
            <div className='login-sign'>
                <h1>Login</h1>
            </div>
            <div className='login-form'>
                <input type='text' name='username' placeholder='Username' />
                <input type='text' name='password' placeholder='Password' />
                <div className='signuplink'>
                    <Link to='/signup'>Sign-Up</Link>
                </div>
                <div>
                <div className='login-button'>
                    <Link to="/play">
                        <button type="submit">Login</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    )
}