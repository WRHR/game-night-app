import React, {useState} from 'react'
import {fetchLogin} from '../helpers/fetchHelpers'

export default function LoginForm({setUser, setFormToggle}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        let body = { email, password }

        console.log(body)
        let result = await fetchLogin(body)
        localStorage.setItem('token', result.token)

    }
    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>Email:</label>
            <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            <p>Register a new user <a onClick={(e)=>{setFormToggle(false)}}>here</a></p>
        </form>
    )
}