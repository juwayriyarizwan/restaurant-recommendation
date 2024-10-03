import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"

export const Signup = () => {
    return (
        <div className='login-back'>
             <div className='login-sign'>
                <h1>Sign Up</h1>
            </div>
            <div className='signup-form'>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='username' placeholder='Username' />
                <input type='text' name='password' placeholder='Password' />
                <Link to="/play">
                    <button type="submit">Sign-Up</button>
                </Link>
            </div>
        </div>
    )
}