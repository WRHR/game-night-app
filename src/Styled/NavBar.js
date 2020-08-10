import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from './Colors'

export const Nav = styled.nav`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 65px;
    z-index:3;
    background-color: ${colors.black};
    transition: width 0.2s, opacity 0.2s;
    
    &:hover {
        width:120px;
    }
`

export const NavItems = styled.ul`
    display:flex;
    flex-direction: column;
    padding: 0 15px;
    justify-content:center;
    height: 900vh;
    max-height: 90vh;
`

export const NavItem = styled(Link)`
    display:flex;
    align-items: center;
    color: ${colors.white};
    text-decoration: none;
    margin: 20px 0;

    &:hover {
        color:${colors.yellow};
    }

    &:active {
        color:${colors.yellow};
    }
`

const fadeIn = keyframes`
    0% { opacity: 0}
    100% { opacity: 1}
`

export const NavDetail = styled.p`
    margin-left: 10px;
    animation: ${fadeIn};
    animation-duration: 0.5s;
    
`

