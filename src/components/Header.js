import React from 'react'
import {HeaderContainer, Logout} from '../Styled/Header'

export default function Header(props){

    return(
        <HeaderContainer>
            <h1 style={{fontSize:'1.25rem'}} >Game Night</h1>
            <Logout to='/login'>Logout</Logout>
        </HeaderContainer>
    )
}