import React from 'react'
import {HeaderContainer, Logout} from '../Styled/Header'

export default function Header(props){

    return(
        <HeaderContainer>
            <h1>Game Night</h1>
            <Logout to='/login'>Logout</Logout>
        </HeaderContainer>
    )
}