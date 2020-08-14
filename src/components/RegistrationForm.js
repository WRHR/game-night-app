import React, {useState} from 'react'
import { registerUrl } from '../helpers/fetchHelpers'

export default function RegistrationFrom({setUser, setFormToggle, ...routerProps}){
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] =useState([])

    const handleLogin = async (e) => {
        e.preventDefault()
        let body = { name:{first, last},email, password }
        fetch(registerUrl, {
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
                routerProps.history.push('/')
            }
        })
    }


    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>Enter First Name:</label>
            <input type='text' name='firstname' onChange={(e)=> setFirst(e.target.value)}/>
            <label>Last Name:</label>
            <input type='text' name='lastname' onChange={(e)=> setLast(e.target.value)}/>
            <label>Email:</label>
            <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />
            <button type='submit'>Login</button>
            <p>Log in <a onClick={(e)=>{setFormToggle(true)}}>here</a></p>
        </form>
    )
}
