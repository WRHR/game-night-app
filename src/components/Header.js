import React from 'react'
import {HeaderContainer, Logout} from '../Styled/Header'

export default function Header({user}){

    return(
        <HeaderContainer>
            <h1>Game Night</h1>
            <Logout to='/login'>Logout</Logout>
        </HeaderContainer>
    )
}