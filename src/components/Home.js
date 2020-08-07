import React from 'react'


export default function Home({user}){
    return (
        <div className='page'>
            <h1>Welcome Back {user.name ? user.name.firstname : null}</h1>
            <h2>Your upcoming events</h2>
            <h2>Public events</h2>
        </div>
    )
}