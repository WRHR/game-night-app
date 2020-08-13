import React, {useState, useEffect} from 'react'
import LoginFrom from './LoginForm'
import LoginForm from './LoginForm'
export default function Login({setUser}){
    const [formToggle, setFormToggle] = useState(true)

    useEffect( ()=> {
        localStorage.removeItem('token')
    },[])
    return(
        <div>
            <h1>Game Night</h1>
            {formToggle ?  <LoginForm setUser={setUser} setFormToggle={setFormToggle} /> :null}
        </div>
    )
}