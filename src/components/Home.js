import React from 'react'
import {Page} from '../Styled/PageStyles'

export default function Home({user}){
    return (
        <Page>
            <h1>Welcome Back {user.name ? user.name.firstname : null}</h1>
            <h2>Your upcoming events</h2>
            <h2>Public events</h2>
        </Page>
    )
}