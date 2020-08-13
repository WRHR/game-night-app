import React, {useState} from 'react'
import {useLogin} from '../hooks/useFetch'

export default function LoginForm({setUser, setFormToggle}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        let body = { email, password }

        console.log(body)
        // useLogin(body)


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