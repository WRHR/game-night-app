import React, {useState} from 'react'
import { fetchRegister } from '../helpers/fetchHelpers'

export default function RegistrationFrom({setUser, setFormToggle}){
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        let body = { name:{first, last},email, password }

        console.log(body)
        let result = await fetchRegister(body)
        localStorage.setItem('token', result.token)

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
