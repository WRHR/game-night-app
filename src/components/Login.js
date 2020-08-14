import React, {useState, useEffect} from 'react'
import LoginForm from './LoginForm'
import RegistrationFrom from './RegistrationForm'

export default function Login({setUser, ...routerProps}){
    const [formToggle, setFormToggle] = useState(true)

    useEffect( ()=> {
        localStorage.removeItem('token')
        setUser({})
    },[])
    return(
        <div>
            <h1>Game Night</h1>
            {formToggle 
                ? <LoginForm setUser={setUser} setFormToggle={setFormToggle} {...routerProps} /> 
                : <RegistrationFrom setUser={setUser} setFormToggle={setFormToggle} {...routerProps} /> 
            }
        </div>
    )
}