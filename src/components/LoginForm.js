import React, {useState} from 'react'
import {loginUrl} from '../helpers/fetchHelpers'

export default function LoginForm({setUser, setFormToggle}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleLogin = async (e) => {
        e.preventDefault()
        let body = { email, password }

        fetch(loginUrl, {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body)
        })
        .then(res => res.json())
        .then(results => {
            if(results.errors){
                setErrors(results.errors)
            }else{
                localStorage.setItem('token', results.token)
                setUser(results.user)
            }
        })

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