import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 10%;
    
    background-color: hsl(211, 87%, 25%);
    /* align-items: center; */
    transition: width 0.2s, opacity 0.2s;
    
    &:hover {
        width:20%;
    }

`

export const NavItems = styled.ul`
    display:flex;
    flex-direction: column;
    padding:15px;
    justify-content:space-around;
    height: 100vh;
`

export const NavItem = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: hsl(35, 80%, 82%);
    text-decoration: none;

    &::visited {
        color: hsl(35, 80%, 82%);
    }

    &:hover {
        color:hsl(47, 87%, 66%);
    }

    &:active {
        color:hsl(47, 87%, 66%);
    }
`

const fadeIn = keyframes`
    0% { opacity: 0}
    100% { opacity: 1}
`

export const NavDetail = styled.p`
    animation: ${fadeIn};
    animation-duration: 0.5s;
`

